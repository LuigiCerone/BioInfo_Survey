import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { SectionB1 } from '../../../model/SectionB1';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { TranslateService } from '@ngx-translate/core';

export interface ImageOptions {
  value: string;
  viewValue: string;
  image: string;
}

@Component({
  selector: 'app-section-b1',
  templateUrl: './section-b1.component.html',
  styleUrls: ['./section-b1.component.css']
})
export class SectionB1Component implements OnInit {

  private burnOpt1: string;
  private burnOpt2: string;
  private burnOpt3: string;
  private burnOpt4: string;
  private tanOpt1: string;
  private tanOpt2: string;
  private tanOpt3: string;
  private tanOpt4: string;
  private eyeOpt1: string;
  private eyeOpt2: string;
  private eyeOpt3: string;
  private hairOpt1: string;
  private hairOpt2: string;
  private hairOpt3: string;
  private hairOpt4: string;
  private hairOpt5: string;
  private freckleOpt1: string;
  private freckleOpt2: string;
  private freckleOpt3: string;
  private freckleOpt4: string;
  private neviOpt1: string;
  private neviOpt2: string;
  private neviOpt3: string;
  private neviOpt4: string;

  private languageChanged: any;

  form: FormGroup;

  burnOpt: Options[] = [
    {value: 'not_burn', viewValue: this.burnOpt1},
    {value: 'light', viewValue: this.burnOpt2},
    {value: 'moderate', viewValue: this.burnOpt3},
    {value: 'severe', viewValue: this.burnOpt4},
  ];

  tanOpt: ImageOptions[] = [
    {value: 'not_tan', viewValue: this.tanOpt1, image: 'assets/images/tans/no_tan.jpg'},
    {value: 'light', viewValue: this.tanOpt2, image: 'assets/images/tans/tans_lightly.jpg'},
    {value: 'moderate', viewValue: this.tanOpt3, image: 'assets/images/tans/tans_moderately.jpg'},
    {value: 'severe', viewValue: this.tanOpt4, image: 'assets/images/tans/tans_deeply.jpg'},
  ];

  eyeOpt: ImageOptions[] = [
    {value: 'light', viewValue: this.eyeOpt1, image: 'assets/images/eyes/light_eyes.jpg'},
    {value: 'medium', viewValue: this.eyeOpt2, image: 'assets/images/eyes/middle_eyes.jpg'},
    {value: 'dark', viewValue: this.eyeOpt3, image: 'assets/images/eyes/dark_eyes.jpg'},
  ];

  hairOpt: ImageOptions[] = [
    {value: 'red', viewValue: this.hairOpt1, image: 'assets/images/hairs/red_hair.jpg'},
    {value: 'blond', viewValue: this.hairOpt2, image: 'assets/images/hairs/blond_hair.jpg'},
    {value: 'light_brown', viewValue: this.hairOpt3, image: 'assets/images/hairs/light_brown_hair.jpg'},
    {value: 'dark', viewValue: this.hairOpt4, image: 'assets/images/hairs/dark_hair.jpg'},
    {value: 'black', viewValue: this.hairOpt5, image: 'assets/images/hairs/black_hair.jpg'},
  ];

  freckleOpt: ImageOptions[] = [
    {value: 'none', viewValue: this.freckleOpt1, image: 'assets/images/freckles/no_freckles.jpg'},
    {value: 'few', viewValue: this.freckleOpt2, image: 'assets/images/freckles/few_freckles.jpg'},
    {value: 'some', viewValue: this.freckleOpt3, image: 'assets/images/freckles/some_freckles.jpg'},
    {value: 'many', viewValue: this.freckleOpt4, image: 'assets/images/freckles/many_freckles.jpg'},
  ];

  neviOpt: ImageOptions[] = [
    {value: 'none', viewValue: this.neviOpt1, image: 'assets/images/nei/no_nei.jpg'},
    {value: 'few', viewValue: this.neviOpt2, image: 'assets/images/nei/few_nei.jpg'},
    {value: 'some', viewValue: this.neviOpt3, image: 'assets/images/nei/some_nei.jpg'},
    {value: 'many', viewValue: this.neviOpt4, image: 'assets/images/nei/many_nei.jpg'},
  ];

  private b1: SectionB1;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService,
              private translateService: TranslateService) { }

  ngOnInit() {
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'b1').subscribe( (section: SectionB1) => {
      console.log(section);
      if (section) {
        this.b1 = section;
      } else {
        this.b1 = new SectionB1();
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
      this.burnOpt1 = data;
    });
    this.translateService.get('SECTION_A2_2_SEX_OPTION_2').subscribe((data: string) => {
      this.burnOpt2 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_1').subscribe((data: string) => {
      this.burnOpt3 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_2').subscribe((data: string) => {
      this.burnOpt4 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_3').subscribe((data: string) => {
      this.tanOpt1 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_4').subscribe((data: string) => {
      this.tanOpt2 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_5').subscribe((data: string) => {
      this.tanOpt3 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_6').subscribe((data: string) => {
      this.tanOpt4 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_7').subscribe((data: string) => {
      this.hairOpt1 = data;
    });
    this.translateService.get('SECTION_A2_4_ETN_OPTION_8').subscribe((data: string) => {
      this.hairOpt2 = data;
    });
    this.translateService.get('SECTION_A2_6_EDUC_OPTION_1').subscribe((data: string) => {
      this.hairOpt3 = data;
    });
    this.translateService.get('SECTION_A2_6_EDUC_OPTION_2').subscribe((data: string) => {
      this.hairOpt4 = data;
    });
    this.translateService.get('SECTION_A2_6_EDUC_OPTION_3').subscribe((data: string) => {
      this.hairOpt5 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_1').subscribe((data: string) => {
      this.eyeOpt1 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_2').subscribe((data: string) => {
      this.eyeOpt2 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_3').subscribe((data: string) => {
      this.eyeOpt3 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_4').subscribe((data: string) => {
      this.freckleOpt1 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.freckleOpt2 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.freckleOpt3 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.freckleOpt4 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.neviOpt1 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.neviOpt2 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.neviOpt3 = data;
    });
    this.translateService.get('SECTION_A2_6_OCC_OPTION_5').subscribe((data: string) => {
      this.neviOpt4 = data;
    });
  }


  buildForm() {
    this.form = new FormGroup({
      skinType1: new FormControl(this.b1.skinType1, Validators.required),
      skinType2: new FormControl(this.b1.skinType2, Validators.required),
      eyeColor: new FormControl(this.b1.eyeColor, Validators.required),
      hairColor: new FormControl(this.b1.hairColor, Validators.required),
      freckles: new FormControl(this.b1.freckles, Validators.required),
      neviInChildhoodAdolescence: new FormControl(this.b1.neviInChildhoodAdolescence, Validators.required),
    });
  }

  save() {
    this.b1 = new SectionB1(this.form);

    console.log(this.b1);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'b1', this.b1).subscribe( (res) => {
      console.log(res);
    });
  }
}
