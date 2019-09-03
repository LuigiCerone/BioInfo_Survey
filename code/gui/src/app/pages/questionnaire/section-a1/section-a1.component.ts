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
    {value: 'case', viewValue: 'SECTION_A1_1_SUBJECT_OPTION_1'},
    {value: 'control', viewValue: 'SECTION_A1_1_SUBJECT_OPTION_2'},
  ];

  melanomaOpt: Options[] = [
    {value: 'sporadic', viewValue: 'SECTION_A1_4_MELANOMA_OPTION_1'},
    {value: 'familial', viewValue: 'SECTION_A1_4_MELANOMA_OPTION_2'},
    {value: 'dont_know', viewValue: 'SECTION_A1_4_MELANOMA_OPTION_3'},
    {value: 'other', viewValue: 'SECTION_A1_4_MELANOMA_OPTION_4'},
  ];

  private a1: SectionA1;
  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService,
              private translateService: TranslateService) { }

  async ngOnInit() {
    // this.getTranslation();

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
