import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { SectionB1 } from '../../../model/SectionB1';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { SectionA1 } from '../../../model/SectionA1';

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
    {value: 'not_burn', viewValue: 'Not burn'},
    {value: 'light', viewValue: 'Burns lightly'},
    {value: 'moderate', viewValue: 'Burns moderately'},
    {value: 'severe', viewValue: 'Burns severely'},
  ];

  tanOpt: ImageOptions[] = [
    {value: 'not_tan', viewValue: 'Not tan', image: 'assets/images/tans/no_tan.jpg'},
    {value: 'light', viewValue: 'Tans lightly', image: 'assets/images/tans/tans_lightly.jpg'},
    {value: 'moderate', viewValue: 'Tans moderately', image: 'assets/images/tans/tans_moderately.jpg'},
    {value: 'severe', viewValue: 'Tans severely', image: 'assets/images/tans/tans_deeply.jpg'},
  ];

  eyeOpt: ImageOptions[] = [
    {value: 'light', viewValue: 'Light (green, blue, grey)', image: 'assets/images/eyes/light_eyes.jpg'},
    {value: 'medium', viewValue: 'Medium (light brown, hazel)', image: 'assets/images/eyes/middle_eyes.jpg'},
    {value: 'dark', viewValue: 'Dark (dark brown, black)', image: 'assets/images/eyes/dark_eyes.jpg'},
  ];

  hairOpt: ImageOptions[] = [
    {value: 'red', viewValue: 'Red', image: 'assets/images/hairs/red_hair.jpg'},
    {value: 'blond', viewValue: 'Blond', image: 'assets/images/hairs/blond_hair.jpg'},
    {value: 'light_brown', viewValue: 'Light brown', image: 'assets/images/hairs/light_brown_hair.jpg'},
    {value: 'dark', viewValue: 'Dark', image: 'assets/images/hairs/dark_hair.jpg'},
    {value: 'black', viewValue: 'Black', image: 'assets/images/hairs/black_hair.jpg'},
  ];

  freckleOpt: ImageOptions[] = [
    {value: 'none', viewValue: 'None', image: 'assets/images/freckles/no_freckles.jpg'},
    {value: 'few', viewValue: 'Few', image: 'assets/images/freckles/few_freckles.jpg'},
    {value: 'some', viewValue: 'Some', image: 'assets/images/freckles/some_freckles.jpg'},
    {value: 'many', viewValue: 'Many', image: 'assets/images/freckles/many_freckles.jpg'},
  ];

  neviOpt: ImageOptions[] = [
    {value: 'none', viewValue: 'None', image: 'assets/images/nei/no_nei.jpg'},
    {value: 'few', viewValue: 'Few', image: 'assets/images/nei/few_nei.jpg'},
    {value: 'some', viewValue: 'Some', image: 'assets/images/nei/some_nei.jpg'},
    {value: 'many', viewValue: 'Many', image: 'assets/images/nei/many_nei.jpg'},
  ];

  private b1: SectionB1;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) { }

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
