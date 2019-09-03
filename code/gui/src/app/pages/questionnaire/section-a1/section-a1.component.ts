import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionA1 } from '../../../model/SectionA1';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { MatStepper } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';

export interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-section-a1',
  templateUrl: './section-a1.component.html',
  styleUrls: ['./section-a1.component.css']
})

export class SectionA1Component implements OnInit {
  @ViewChild('stepper', { static: false }) stepper: MatStepper;

  private subjectOpt1: string;
  private subjectOpt2: string;
  private melanomaType1: string;
  private melanomaType2: string;
  private melanomaType3: string;
  private melanomaType4: string;

  private languageChanged: any;

  private form: FormGroup;

  subjectOpt: Options[] = [
    {value: 'case', viewValue: this.subjectOpt1},
    {value: 'control', viewValue: this.subjectOpt2},
  ];

  melanomaOpt: Options[] = [
    {value: 'sporadic', viewValue: this.melanomaType1},
    {value: 'familial', viewValue: this.melanomaType2},
    {value: 'dont_know', viewValue: this.melanomaType3},
    {value: 'other', viewValue: this.melanomaType4},
  ];

  private a1: SectionA1;
  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService,
              private translateService: TranslateService) { }

  async ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);
    
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.username, 'a1').subscribe( (section: SectionA1) => {
      console.log(section);
      if (section) {
        this.a1 = section;
      } else {
        this.a1 = new SectionA1();
      }
      this.buildForm();
    });
    this.subscribeToEvents();
    await this.getTranslation();
  }

  subscribeToEvents() {
    // When the language is changed all the translated
    // varibles need to be translated again
    this.languageChanged = this.translateService.onLangChange.subscribe(() => {
      this.getTranslation();
    });
  }

  async getTranslation() {
    this.translateService.get('SECTION_A1_1_SUBJECT_OPTION_1').subscribe((data: string) => {
      this.subjectOpt1 = data;
    });
    this.translateService.get('SECTION_A1_1_SUBJECT_OPTION_2').subscribe((data: string) => {
      this.subjectOpt2 = data;
    });
    this.translateService.get('SECTION_A1_4_MELANOMA_OPTION_1').subscribe((data: string) => {
      this.melanomaType1 = data;
    });
    this.translateService.get('SECTION_A1_4_MELANOMA_OPTION_2').subscribe((data: string) => {
      this.melanomaType2 = data;
    });
    this.translateService.get('SECTION_A1_4_MELANOMA_OPTION_3').subscribe((data: string) => {
      this.melanomaType3 = data;
    });
    await this.translateService.get('SECTION_A1_4_MELANOMA_OPTION_4').subscribe((data: string) => {
      this.melanomaType4 = data;
    });
  }

  buildForm() {
    this.form = new FormGroup({
      subject: new FormControl(this.a1.subject , Validators.required),
      dbCodeNumber: new FormControl(this.a1.dbCodeNumber, [
        Validators.required,
        Validators.pattern('[0-9]{4}[MC][0-9]{4}')
      ]),
      dateOfQuestionnaireAdministration: new FormControl(this.a1.dateOfQuestionnaireAdministration, [
        Validators.required,
        Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
      ]),
      typeOfMelanoma: new FormControl(this.a1.typeOfMelanoma, Validators.required),
      otherSpecification: new FormControl(this.a1.otherSpecification)
    });
  }

  /* This method is used to select ion-select item according to model status. */
  subjectSelected(o1: string, o2: string) {
    return o1 && o2 ? o1.toLowerCase() === o2.toLowerCase() : o1 === o2;
  }

  save() {
    this.a1 = new SectionA1(this.form);

    console.log(this.a1);
    this.questionnaireService.insertSection(this.username, 'a1', this.a1).subscribe( (res) => {
      console.log(res);
    });
  }
}
