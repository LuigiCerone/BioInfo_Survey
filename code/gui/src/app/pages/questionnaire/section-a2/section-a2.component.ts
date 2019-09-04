import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { Occupation, SectionA2 } from '../../../model/SectionA2';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { MedicalDiagnosis } from '../../../model/SectionC2';

@Component({
  selector: 'app-section-a2',
  templateUrl: './section-a2.component.html',
  styleUrls: ['./section-a2.component.css']
})
export class SectionA2Component implements OnInit {
  form: FormGroup;
  formHistory: FormGroup;

  sexOpt: Options[] = [
    {value: 'male', viewValue: 'SECTION_A2_2_SEX_OPTION_1'},
    {value: 'female', viewValue: 'SECTION_A2_2_SEX_OPTION_2'},
  ];
  ethnicityOpt: Options[] = [
    {value: 'europe', viewValue: 'SECTION_A2_4_ETN_OPTION_1'},
    {value: 'north_africa', viewValue: 'SECTION_A2_4_ETN_OPTION_2'},
    {value: 'middle_east', viewValue: 'SECTION_A2_4_ETN_OPTION_3'},
    {value: 'jewish', viewValue: 'SECTION_A2_4_ETN_OPTION_4'},
    {value: 'black', viewValue: 'SECTION_A2_4_ETN_OPTION_5'},
    {value: 'asian', viewValue: 'SECTION_A2_4_ETN_OPTION_6'},
    {value: 'hispanic', viewValue: 'SECTION_A2_4_ETN_OPTION_7'},
    {value: 'other', viewValue: 'SECTION_A2_4_ETN_OPTION_8'},
  ];

  educationOpt: Options[] = [
    {value: 'junior', viewValue: 'SECTION_A2_6_EDUC_OPTION_1'},
    {value: 'high', viewValue: 'SECTION_A2_6_EDUC_OPTION_2'},
    {value: 'university', viewValue: 'SECTION_A2_6_EDUC_OPTION_3'},
  ];

  occupationOpt: Options[] = [
    {value: 'employed', viewValue: 'SECTION_A2_6_OCC_OPTION_1'},
    {value: 'work_at_home', viewValue: 'SECTION_A2_6_OCC_OPTION_2'},
    {value: 'unemployed', viewValue: 'SECTION_A2_6_OCC_OPTION_3'},
    {value: 'student', viewValue: 'SECTION_A2_6_OCC_OPTION_4'},
    {value: 'retired', viewValue: 'SECTION_A2_6_OCC_OPTION_5'},
  ];

  private a2: SectionA2;
  private username: string;

  private historyTable = new MatTableDataSource(new Array<Occupation>());
  displayedColumns: string[] = ['code', 'start', 'end', 'actions'];
  @ViewChild('occupationDialog', {static: false}) occupationDialog: TemplateRef<any>;


  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService,
              private dialog: MatDialog ) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    // console.log(this.username);
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.username, 'a2').subscribe( (section: SectionA2) => {
      console.log(section);
      if (section) {
        this.a2 = section;
      } else {
        this.a2 = new SectionA2();
      }
      this.buildForm();
      this.buildFormOccupation();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      sex: new FormControl(this.a2.sex, [Validators.required]),
      cityOfBirth: new FormControl(this.a2.cityOfBirth, [Validators.required]),
      provinceOfBirth: new FormControl(this.a2.provinceOfBirth, [Validators.required]),
      countryOfBirth: new FormControl(this.a2.countryOfBirth, [Validators.required]),
      dateOfBirth: new FormControl(this.a2.dateOfBirth, [
        Validators.required,
        Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
      ]),
      height: new FormControl(this.a2.height, [Validators.required]),
      weight: new FormControl(this.a2.weight, [Validators.required]),
      ethnicity: new FormControl(this.a2.ethnicity, [Validators.required]),
      otherEthnicity: new FormControl(this.a2.otherEthnicity ),
      cityOfResidence: new FormControl(this.a2.cityOfResidence, [Validators.required] ),
      provinceOfResidence: new FormControl(this.a2.provinceOfResidence, [Validators.required] ),
      countryOfResidence: new FormControl(this.a2.countryOfResidence, [Validators.required]),
      education: new FormControl(this.a2.education, [Validators.required]),
      currentOccupationalStatus: new FormControl(this.a2.currentOccupationalStatus, [Validators.required]),
    });
  }

  save() {
    this.a2 = new SectionA2(this.form, this.a2.historyOfOccupations);

    console.log(this.a2);
    this.questionnaireService.insertSection(this.username, 'a2', this.a2).subscribe( (res) => {
      console.log(res);
    });
  }


  // History of occupations modal.
  buildFormOccupation() {
    // Init table for melanoma.
    if (this.a2 && this.a2.historyOfOccupations) {
      this.historyTable.data = this.a2.historyOfOccupations;
    } else {
      this.a2.historyOfOccupations = new Array<Occupation>();
      this.historyTable.data = this.a2.historyOfOccupations;
    }

    this.formHistory = new FormGroup({
      sicCode: new FormControl('', [ Validators.required ]),
      occupationStartingTime: new FormControl('',
        [ Validators.required, Validators.pattern('[0-9]{4}') ]),
      occupationEndingTime: new FormControl('',
        [ Validators.required, Validators.pattern('[0-9]{4}') ])
    });
  }

  removeHistory(element) {
    const index = this.a2.historyOfOccupations.indexOf(element);
    if (index > -1) {
      // Remove element.
      this.a2.historyOfOccupations.splice(index, 1);
      // Update table content.
      this.historyTable.data = this.a2.historyOfOccupations;
    }
  }

  openHisotryModal() {
    this.dialog.open(this.occupationDialog);
  }

  addHistory() {
    const newHistory: Occupation = new Occupation(this.formHistory);
    this.a2.historyOfOccupations.push(newHistory);

    // Update table data.
    this.historyTable.data = this.a2.historyOfOccupations;

    console.log(this.a2.historyOfOccupations);
    // Clear form inputs.
    this.formHistory.reset();
  }
}
