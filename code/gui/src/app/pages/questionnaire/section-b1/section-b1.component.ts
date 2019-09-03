import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { SectionB1 } from '../../../model/SectionB1';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  form: FormGroup;

  burnOpt: Options[] = [
    {value: 'not_burn', viewValue: 'SECTION_B1_1_BURN_OPTION_1'},
    {value: 'light', viewValue: 'SECTION_B1_1_BURN_OPTION_2'},
    {value: 'moderate', viewValue: 'SECTION_B1_1_BURN_OPTION_3'},
    {value: 'severe', viewValue: 'SECTION_B1_1_BURN_OPTION_4'},
  ];

  tanOpt: ImageOptions[] = [
    {value: 'not_tan', viewValue: 'SECTION_B1_1_TAN_OPTION_1', image: 'assets/images/tans/no_tan.jpg'},
    {value: 'light', viewValue: 'SECTION_B1_1_TAN_OPTION_2', image: 'assets/images/tans/tans_lightly.jpg'},
    {value: 'moderate', viewValue: 'SECTION_B1_1_TAN_OPTION_3', image: 'assets/images/tans/tans_moderately.jpg'},
    {value: 'severe', viewValue: 'SECTION_B1_1_TAN_OPTION_4', image: 'assets/images/tans/tans_deeply.jpg'},
  ];

  eyeOpt: ImageOptions[] = [
    {value: 'light', viewValue: 'SECTION_B1_2_EYE_OPTION_1', image: 'assets/images/eyes/light_eyes.jpg'},
    {value: 'medium', viewValue: 'SECTION_B1_2_EYE_OPTION_2', image: 'assets/images/eyes/middle_eyes.jpg'},
    {value: 'dark', viewValue: 'SECTION_B1_2_EYE_OPTION_3', image: 'assets/images/eyes/dark_eyes.jpg'},
  ];

  hairOpt: ImageOptions[] = [
    {value: 'red', viewValue: 'SECTION_B1_3_HAIR_OPTION_1', image: 'assets/images/hairs/red_hair.jpg'},
    {value: 'blond', viewValue: 'SECTION_B1_3_HAIR_OPTION_2', image: 'assets/images/hairs/blond_hair.jpg'},
    {value: 'light_brown', viewValue: 'SECTION_B1_3_HAIR_OPTION_3', image: 'assets/images/hairs/light_brown_hair.jpg'},
    {value: 'dark', viewValue: 'SECTION_B1_3_HAIR_OPTION_4', image: 'assets/images/hairs/dark_hair.jpg'},
    {value: 'black', viewValue: 'SECTION_B1_3_HAIR_OPTION_5', image: 'assets/images/hairs/black_hair.jpg'},
  ];

  freckleOpt: ImageOptions[] = [
    {value: 'none', viewValue: 'SECTION_B1_4_FRECKLES_OPTION_1', image: 'assets/images/freckles/no_freckles.jpg'},
    {value: 'few', viewValue: 'SECTION_B1_4_FRECKLES_OPTION_2', image: 'assets/images/freckles/few_freckles.jpg'},
    {value: 'some', viewValue: 'SECTION_B1_4_FRECKLES_OPTION_3', image: 'assets/images/freckles/some_freckles.jpg'},
    {value: 'many', viewValue: 'SECTION_B1_4_FRECKLES_OPTION_4', image: 'assets/images/freckles/many_freckles.jpg'},
  ];

  neviOpt: ImageOptions[] = [
    {value: 'none', viewValue: 'SECTION_B1_5_NEVI_OPTION_1', image: 'assets/images/nei/no_nei.jpg'},
    {value: 'few', viewValue: 'SECTION_B1_5_NEVI_OPTION_2', image: 'assets/images/nei/few_nei.jpg'},
    {value: 'some', viewValue: 'SECTION_B1_5_NEVI_OPTION_3', image: 'assets/images/nei/some_nei.jpg'},
    {value: 'many', viewValue: 'SECTION_B1_5_NEVI_OPTION_4', image: 'assets/images/nei/many_nei.jpg'},
  ];

  private b1: SectionB1;
  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);

    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.username, 'b1').subscribe( (section: SectionB1) => {
      console.log(section);
      if (section) {
        this.b1 = section;
      } else {
        this.b1 = new SectionB1();
      }
      this.buildForm();
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
    this.questionnaireService.insertSection(this.username, 'b1', this.b1).subscribe( (res) => {
      console.log(res);
    });
  }
}
