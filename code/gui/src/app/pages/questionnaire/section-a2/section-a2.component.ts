import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { SectionA2 } from '../../../model/SectionA2';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-section-a2',
  templateUrl: './section-a2.component.html',
  styleUrls: ['./section-a2.component.css']
})
export class SectionA2Component implements OnInit {
  @Input()

  private sexOpt1: string;
  private sexOpt2: string;
  private etnType1: string;
  private etnType2: string;
  private etnType3: string;
  private etnType4: string;
  private etnType5: string;
  private etnType6: string;
  private etnType7: string;
  private etnType8: string;
  private educOpt1: string;
  private educOpt2: string;
  private educOpt3: string;
  private occOpt1: string;
  private occOpt2: string;
  private occOpt3: string;
  private occOpt4: string;
  private occOpt5: string;

  private languageChanged: any;

  form: FormGroup;

  sexOpt: Options[] = [
    {value: 'male', viewValue: this.sexOpt1},
    {value: 'female', viewValue: this.sexOpt2},
  ];
  ethnicityOpt: Options[] = [
    {value: 'europe', viewValue: this.etnType1},
    {value: 'north_africa', viewValue: this.etnType2},
    {value: 'middle_east', viewValue: this.etnType3},
    {value: 'jewish', viewValue: this.etnType4},
    {value: 'black', viewValue: this.etnType5},
    {value: 'asian', viewValue: this.etnType6},
    {value: 'hispanic', viewValue: this.etnType7},
    {value: 'other', viewValue: this.etnType8},
  ];

  educationOpt: Options[] = [
    {value: 'junior', viewValue: this.educOpt1},
    {value: 'high', viewValue: this.educOpt2},
    {value: 'university', viewValue: this.educOpt3},
  ];

  occupationOpt: Options[] = [
    {value: 'employed', viewValue: this.occOpt1},
    {value: 'work_at_home', viewValue: this.occOpt2},
    {value: 'unemployed', viewValue: this.occOpt3},
    {value: 'student', viewValue: this.occOpt4},
    {value: 'retired', viewValue: this.occOpt5},
  ];

  private a2: SectionA2;
  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService,
              private translateService: TranslateService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.username, 'a2').subscribe( (section: SectionA2) => {
      console.log(section);
      if (section) {
        this.a2 = section;
      } else {
        this.a2 = new SectionA2();
      }
      this.buildForm();
    });
    this.subscribeToEvents();
    this.getTranslation();
  }

  subscribeToEvents() {
    // When the language is changed all the translated
    // varibles need to be translated again
    this.languageChanged = this.translateService.onLangChange.subscribe(() => {
      this.getTranslation();
    });
  }

  getTranslation() {
    this.translateService.get('SECTION_A2_2_SEX_OPTION_1').subscribe((data: string) => {
      this.sexOpt1 = data;
    });
    this.translateService.get('SECTION_A2_2_SEX_OPTION_2').subscribe((data: string) => {
      this.sexOpt2 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_1').subscribe((data: string) => {
      this.etnType1 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_2').subscribe((data: string) => {
      this.etnType2 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_3').subscribe((data: string) => {
      this.etnType3 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_4').subscribe((data: string) => {
      this.etnType4 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_5').subscribe((data: string) => {
      this.etnType5 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_6').subscribe((data: string) => {
      this.etnType6 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_7').subscribe((data: string) => {
      this.etnType7 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_8').subscribe((data: string) => {
      this.etnType8 = data;
    });
    this.translateService.get('SECTION_A2_6_EDUC_OPTION_1').subscribe((data: string) => {
      this.educOpt1 = data;
    });
    this.translateService.get('SECTION_A2_6_EDUC_OPTION_2').subscribe((data: string) => {
      this.educOpt2 = data;
    });
    this.translateService.get('SECTION_A2_6_EDUC_OPTION_3').subscribe((data: string) => {
      this.educOpt3 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_1').subscribe((data: string) => {
      this.occOpt1 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_2').subscribe((data: string) => {
      this.occOpt2 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_3').subscribe((data: string) => {
      this.occOpt3 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_4').subscribe((data: string) => {
      this.occOpt4 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.occOpt5 = data;
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
    this.a2 = new SectionA2(this.form);

    console.log(this.a2);
    this.questionnaireService.insertSection(this.username, 'a2', this.a2).subscribe( (res) => {
      console.log(res);
    });
  }

  /* This method is used to select ion-select item according to model status. */
  sexSelected(o1: string, o2: string) {
    return o1 && o2 ? o1.toLowerCase() === o2.toLowerCase() : o1 === o2;
  }
}
