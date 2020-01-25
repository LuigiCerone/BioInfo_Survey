import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { QueryBuilderConfig } from 'angular2-query-builder';
import { AuthenticationService } from '../../services/authentication.service';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { Questionnaire } from '../../model/Questionnaire';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import * as moment from 'moment';
import { CustomExporter } from './CustomExporter';
import { MatTableExporterDirective } from 'mat-table-exporter';

@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: [ './query.component.css' ]
})
export class QueryComponent implements OnInit {
  displayedColumns: string[] = [ 'subject', 'dbCodeNumber', 'username', 'completed', 'actions' ];

  private data: Questionnaire[];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @ViewChild('viewerDialog', { static: false }) viewerDialog: TemplateRef<any>;
  @ViewChild('percentageDialog', { static: false }) percentageDialog: TemplateRef<any>;

  @ViewChild('exportDirective', { static: false }) exportDirective: MatTableExporterDirective;
  customExporter: CustomExporter;

  private selectedQuestionnaire: Questionnaire;

  query = {
    condition: 'and',
    rules: [],
    otherConditionType: 'default',
    otherConditionField: ''
  };


  config: QueryBuilderConfig = {
    fields: {
      'a1.typeOfMelanoma': {
        name: 'a1.typeOfMelanoma',
        type: 'category',
        operators: [ '=' ],
        defaultValue: 'sporadic',
        options: [
          { name: 'Sporadic', value: 'sporadic' },
          { name: 'Familial', value: 'familial' },
          { name: 'Don\'t know', value: 'dont_know' },
          { name: 'Other', value: 'other' }
        ]
      },
      'a1.subject': {
        name: 'a1.subject',
        type: 'category',
        operators: [ '=' ],
        defaultValue: 'case',
        options: [
          { name: 'Case', value: 'case' },
          { name: 'Control', value: 'control' }
        ]
      },
      'a1.dateOfQuestionnaireAdministration': {
        name: 'a1.dateOfQuestionnaireAdministration',
        type: 'date',
        operators: [ '>=', '<=' ],
      },
      'a2.sex': {
        name: 'a2.sex',
        type: 'category',
        operators: [ '=' ],
        defaultValue: 'male',
        options: [
          { name: 'Male', value: 'male' },
          { name: 'Female', value: 'female' }
        ]
      },
      'a2.dateOfBirth': {
        name: 'a2.dateOfBirth',
        type: 'date',
        operators: [ '>=', '<=' ]
      },
      'a2.cityOfBirth': {
        name: 'a2.cityOfBirth',
        type: 'string',
        operators: [ '=', '!=' ]
      },
      'a2.provinceOfBirth': {
        name: 'a2.provinceOfBirth',
        type: 'string',
        operators: [ '=', '!=' ]
      },
      'a2.countryOfBirth': {
        name: 'a2.countryOfBirth',
        type: 'string',
        operators: [ '=', '!=' ]
      },
      'a2.weight': {
        name: 'a2.weight',
        type: 'string',
        operators: [ '>=', '<=' ]
      },
      'a2.height': {
        name: 'a2.height',
        type: 'string',
        operators: [ '>=', '<=' ]
      },
      'a2.ethnicity': {
        name: 'a2.ethnicity',
        type: 'category',
        operators: [ '=' ],
        defaultValue: 'europe',
        options: [
          { name: 'Europe', value: 'europe' },
          { name: 'North Africa', value: 'north_africa' },
          { name: 'Middle East', value: 'middle_east' },
          { name: 'Jewish', value: 'jewish' },
          { name: 'Black', value: 'black' },
          { name: 'Asian', value: 'asian' },
          { name: 'Hispanic', value: 'hispanic' },
          { name: 'Other', value: 'other' }
        ]
      },
      'a2.cityOfResidence': {
        name: 'a2.cityOfResidence',
        type: 'string',
        operators: [ '=', '!=' ]
      },
      'a2.provinceOfResidence': {
        name: 'a2.provinceOfResidence',
        type: 'string',
        operators: [ '=', '!=' ]
      },
      'a2.countryOfResidence': {
        name: 'a2.countryOfResidence',
        type: 'string',
        operators: [ '=', '!=' ]
      },
      'a2.education': {
        name: 'a2.education',
        type: 'category',
        defaultValue: 'junior',
        operators: [ '=' ],
        options: [
          { name: 'Junior', value: 'junior' },
          { name: 'High', value: 'high' },
          { name: 'University', value: 'university' }
        ]
      },
      'b1.skinType1': {
        name: 'b1.skinType1',
        type: 'category',
        defaultValue: 'not_burn',
        operators: [ '=', '!=' ],
        options: [
          { name: 'Not burn', value: 'not_burn' },
          { name: 'Light', value: 'light' },
          { name: 'Moderate', value: 'moderate' },
          { name: 'Severe', value: 'severe' }
        ]
      },
      'b1.skinType2': {
        name: 'b1.skinType2',
        type: 'category',
        defaultValue: 'not_tan',
        operators: [ '=', '!=' ],
        options: [
          { name: 'Not tan', value: 'not_tan' },
          { name: 'Light', value: 'light' },
          { name: 'Moderate', value: 'moderate' },
          { name: 'Severe', value: 'severe' }
        ]
      },
      'b1.eyeColor': {
        name: 'b1.eyeColor',
        type: 'category',
        defaultValue: 'light',
        operators: [ '=', '!=' ],
        options: [
          { name: 'Light', value: 'light' },
          { name: 'Medium', value: 'medium' },
          { name: 'Dark', value: 'dark' }
        ]
      },
      'b1.hairColor': {
        name: 'b1.hairColor',
        type: 'category',
        defaultValue: 'red',
        operators: [ '=', '!=' ],
        options: [
          { name: 'Red', value: 'red' },
          { name: 'Blond', value: 'blond' },
          { name: 'Light brown', value: 'light_brown' },
          { name: 'Dark', value: 'dark' },
          { name: 'Black', value: 'black' }
        ]
      },
      'b1.freckles': {
        name: 'b1.freckles',
        type: 'category',
        defaultValue: 'none',
        operators: [ '=', '!=' ],
        options: [
          { name: 'None', value: 'none' },
          { name: 'Few', value: 'few' },
          { name: 'Some', value: 'some' },
          { name: 'Many', value: 'many' }
        ]
      },
      'b1.neviInChildhoodAdolescence': {
        name: 'b1.neviInChildhoodAdolescence',
        type: 'category',
        defaultValue: 'none',
        operators: [ '=', '!=' ],
        options: [
          { name: 'None', value: 'none' },
          { name: 'Few', value: 'few' },
          { name: 'Some', value: 'some' },
          { name: 'Many', value: 'many' }
        ]
      },
      'b2.occupationalSunExposure.isTrue': {
        name: 'b2.occupationalSunExposure.isTrue',
        type: 'category',
        defaultValue: 'true',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'b2.recreationalSunExposure.isTrue': {
        name: 'b2.recreationalSunExposure.isTrue',
        type: 'category',
        defaultValue: 'true',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'b2.mostRecentIntermittentSunExposure': {
        name: 'b2.mostRecentIntermittentSunExposure',
        type: 'date',
        operators: [ '>=', '<=' ]
      },
      'b2.sunlampsSunbeds.isTrue': {
        name: 'b2.sunlampsSunbeds.isTrue',
        type: 'category',
        defaultValue: 'true',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'b3.intakeOfVitaminesDuringLastYears': {
        name: 'b3.intakeOfVitaminesDuringLastYears',
        type: 'category',
        defaultValue: 'true',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c1.solarLentigines.howMany': {
        name: 'c1.solarLentigines.howMany',
        type: 'category',
        defaultValue: 'none',
        operators: [ '=', '!=' ],
        options: [
          { name: 'None', value: 'none' },
          { name: 'Few', value: 'few' },
          { name: 'Some', value: 'some' },
          { name: 'Many', value: 'many' }
        ]
      },
      'c1.congenitalNevi.presenceOfMediumSizedNevi': {
        name: 'c1.congenitalNevi.presenceOfMediumSizedNevi',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c1.congenitalNevi.presenceOfLargeSizedNevi': {
        name: 'c1.congenitalNevi.presenceOfLargeSizedNevi ',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c1.congenitalNevi.presenceOfGiantSizedNevi': {
        name: 'c1.congenitalNevi.presenceOfGiantSizedNevi',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c1.blueNevi.presence': {
        name: 'c1.blueNevi.presence',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c1.actinicKeratoses.presence': {
        name: 'c1.actinicKeratoses.presence',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c2.pregnancyHistory.numberOfFullTermPregnancies': {
        name: 'c2.pregnancyHistory.numberOfFullTermPregnancies',
        type: 'string',
        operators: [ '>=', '<=' ]
      },
      'c2.pregnancyHistory.melanomaOccurDuringPregnancy': {
        name: 'c2.pregnancyHistory.melanomaOccurDuringPregnancy',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c2.pregnancyHistory.melanomaOccurBeforePregnancy': {
        name: 'c2.pregnancyHistory.melanomaOccurBeforePregnancy',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c2.pregnancyHistory.melanomaOccurAfterPregnancy': {
        name: 'c2.pregnancyHistory.melanomaOccurAfterPregnancy',
        type: 'category',
        defaultValue: 'false',
        operators: [ '=', '!=' ],
        options: [
          { name: 'True', value: 'true' },
          { name: 'False', value: 'false' }
        ]
      },
      'c3.germlineStatus': {
        name: 'c3.germlineStatus',
        type: 'category',
        defaultValue: 'not_tested',
        operators: [ '=', '!=' ],
        options: [
          {value: 'not_tested', name: 'Not tested'},
          {value: 'CDKN2A', name: 'CDKN2A'},
          {value: 'CDK4', name: 'CDK4'},
          {value: 'BAP-1', name: 'BAP-1'},
          {value: 'MC1R', name: 'MC1R'},
          {value: 'TERT', name: 'TERT'},
          {value: 'MITF', name: 'MITF'},
          {value: 'POT1', name: 'POT1'},
          {value: 'other', name: 'Other'}
        ]
      },
      'numberOfMPM': {
        name: 'numberOfMPM',
        type: 'number',
        operators: [ '>=', '<=' ]
      },

    }
  };
  private percentage: number;


  constructor(private authenticationService: AuthenticationService,
              private questionnaireService: QuestionnaireService,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    // Get all questionnaires.
    this.questionnaireService.getAllQuestionnaire().subscribe((result: Array<Questionnaire>) => {
      console.log(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;
    });
  }

  showQuestionnare(element: Questionnaire) {
    this.selectedQuestionnaire = element;
    this.dialog.open(this.viewerDialog);
  }

  showPercentageResult(percentage: number) {
    this.percentage = percentage;
    this.dialog.open(this.percentageDialog);
  }

  runQuery() {
    // We need to transform the date into long epoch millis.
    this.transform();
    console.log(this.query);

    this.questionnaireService.runQuery(this.authenticationService.currentUserValue.username, this.query).subscribe((result: Array<Questionnaire>) => {
      // console.log(result);
      this.dataSource.data = result;
      this.dataSource.paginator = this.paginator;

      if (this.query.otherConditionType === 'count') {
        this.questionnaireService.getAllQuestionnaire().subscribe((r: Array<Questionnaire>) => {
          const res = result.length / r.length;
          this.showPercentageResult(Math.round(res * 100));
        });
      }

    });
  }

  transform() {
    if (!this.query.rules) {
      return;
    }
    for (const field of this.query.rules) {
      // console.log(field);
      if (field.value && this.isDate(field.value)) {
        // field.value = moment(field.value, 'YYYY/MM/DD').valueOf();
        field.serverType = 'date';
      } else if (field.value && this.isBoolean(field.value)) {
        field.serverType = 'boolean';
      } else {
        field.serverType = 'number';
      }
    }
  }

  isDate(str: string) {
    // 2019-09-13
    const d = moment(str, 'YYYY/MM/DD', true);
    if (d == null || !d.isValid()) {
      return false;
    } else {
      return true;
    }
  }

  isBoolean(str: string) {
    if (str === 'true' || str === 'false') {
      return true;
    } else {
      return false;
    }
  }

  export() {
    this.exportDirective.exporter = new CustomExporter(this.dataSource.data);
    this.exportDirective.exportTable(ExportType.OTHER);
  }
}

export enum ExportType {
  XLS = 'xls',
  XLSX = 'xlsx',
  CSV = 'csv',
  TXT = 'txt',
  JSON = 'json',
  OTHER = 'other'
}
