import { Component, OnInit } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { AuthenticationService } from '../../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.css']
})
export class QueryComponent implements OnInit {
  query = {
    condition: 'and',
    rules: []
  };

  config: QueryBuilderConfig = {
    fields: {
      'a1.typeOfMelanoma': {
        name: 'a1.typeOfMelanoma',
        type: 'category',
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
        options: [
          {name: 'Case', value: 'case'},
          {name: 'Control', value: 'control'}
        ]
      }
    }
  };

  constructor(private authenticationService: AuthenticationService,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
  }

  runQuery() {
    console.log(this.query);
    this.questionnaireService.runQuery(this.authenticationService.currentUserValue.username, this.query).subscribe( (res) => {
      console.log(res);
    });
  }

}
