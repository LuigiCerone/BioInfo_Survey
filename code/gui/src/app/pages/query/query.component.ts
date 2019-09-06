import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Questionnaire } from '../../model/Questionnaire';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  displayedColumns: string[] = ['subject', 'dbCodeNumber', 'username', 'completed', 'actions'];

  private data: Questionnaire[];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @ViewChild('viewerDialog', {static: false}) viewerDialog: TemplateRef<any>;
  private selectedQuestionnaire: Questionnaire;

  query = {
    condition: 'and',
    rules: []
  };

  config: QueryBuilderConfig = {
    fields: {
      'a1.typeOfMelanoma': {
        name: 'a1.typeOfMelanoma',
        type: 'category',
        operators: ['='],
        options: [
          {name: 'Sporadic', value: 'sporadic'},
          {name: 'Familial', value: 'familial'},
          {name: 'Don\'t know', value: 'dont_know'},
          {name: 'Other', value: 'other'}
        ]
      },
      'a1.subject': {
        name: 'a1.subject',
        type: 'category',
        operators: ['='],
        options: [
          {name: 'Case', value: 'case'},
          {name: 'Control', value: 'control'}
        ]
      },
      'a2.sex': {
        name: 'a2.sex',
        type: 'category',
        operators: ['='],
        options: [
          {name: 'Male', value: 'male'},
          {name: 'Female', value: 'female'}
        ]
      },
      'a2.cityOfBirth': {
        name: 'a2.cityOfBirth',
        type: 'string',
        operators: ['=', '!=']
      },
      'a2.provinceOfBirth': {
        name: 'a2.provinceOfBirth',
        type: 'string',
        operators: ['=', '!=']
      },
      'a2.countryOfBirth': {
        name: 'a2.countryOfBirth',
        type: 'string',
        operators: ['=', '!=']
      }
    }
  };


  constructor(private authenticationService: AuthenticationService,
              private questionnaireService: QuestionnaireService,
              private dialog: MatDialog) {}

  ngOnInit(): void {
    // Get all questionnaires.
    this.questionnaireService.getAllQuestionnaire().subscribe( (result: Array<Questionnaire>) => {
      console.log(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
    });
  }

  showQuestionnare(element: Questionnaire) {
    this.selectedQuestionnaire = element;
    this.dialog.open(this.viewerDialog);
  }

  runQuery() {
    console.log(this.query);
    this.questionnaireService.runQuery(this.authenticationService.currentUserValue.username, this.query).subscribe( (result: Array<Questionnaire>) => {
      console.log(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
    });
  }

}
