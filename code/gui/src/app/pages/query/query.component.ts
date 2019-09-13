import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Questionnaire } from '../../model/Questionnaire';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import * as moment from 'moment';

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
        defaultValue: 'sporadic',
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
      'a1.dateOfQuestionnaireAdministration': {
        name: 'a1.dateOfQuestionnaireAdministration',
        type: 'date',
        defaultValue: moment().format('DD/MMM/YYYY'),
        operators: ['>=', '<='],
      },
      'a2.sex': {
        name: 'a2.sex',
        type: 'category',
        operators: ['='],
        defaultValue: 'male',
        options: [
          {name: 'Male', value: 'male'},
          {name: 'Female', value: 'female'}
        ]
      },
      'a2.dateOfBirth': {
        name: 'a2.dateOfBirth',
        type: 'date',
        operators: ['>=', '<=']
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
      },
      'a2.weight': {
        name: 'a2.weight',
        type: 'string',
        operators: ['>=', '<=']
      },
      'a2.height': {
        name: 'a2.height',
        type: 'string',
        operators: ['>=', '<=']
      },
      'a2.ethnicity': {
        name: 'a2.ethnicity',
        type: 'category',
        operators: ['='],
        defaultValue: 'europe',
        options: [
          {name: 'Europe', value: 'europe'},
          {name: 'North Africa', value: 'north_africa'},
          {name: 'Middle East', value: 'middle_east'},
          {name: 'Jewish', value: 'jewish'},
          {name: 'Black', value: 'black'},
          {name: 'Asian', value: 'asian'},
          {name: 'Hispanic', value: 'hispanic'},
          {name: 'Other', value: 'other'}
        ]
      },
      'a2.cityOfResidence': {
        name: 'a2.cityOfResidence',
        type: 'string',
        operators: ['=', '!=']
      },
      'a2.provinceOfResidence': {
        name: 'a2.provinceOfResidence',
        type: 'string',
        operators: ['=', '!=']
      },
      'a2.countryOfResidence': {
        name: 'a2.countryOfResidence',
        type: 'string',
        operators: ['=', '!=']
      },
      'a2.education': {
        name: 'a2.education',
        type: 'category',
        defaultValue: 'junior',
        operators: ['='],
        options: [
          {name: 'Junior', value: 'junior'},
          {name: 'High', value: 'high'},
          {name: 'University', value: 'university'}
        ]
      },
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
    // We need to trasform the date into long epoch millis.
    this.transformDate();
    console.log(this.query);

    this.questionnaireService.runQuery(this.authenticationService.currentUserValue.username, this.query).subscribe( (result: Array<Questionnaire>) => {
      console.log(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
    });
  }

  transformDate() {
    if (!this.query.rules) { return; }
    for (const field of this.query.rules) {
      // console.log(field);

      if (field.value && this.isDate(field.value)) {
        // field.value = moment(field.value, 'YYYY/MM/DD').valueOf();
        field.serverType = 'date';
      }
    }
  }

  isDate(str: string) {
    // 2019-09-13
    const d = moment(str, 'YYYY/MM/DD');
    if (d == null || !d.isValid()) {
      return false;
    } else {
      return true;
    }
  }

}
