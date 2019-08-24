import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';

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
  form: FormGroup = new FormGroup({
    subject: new FormControl('', Validators.required),
    database: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}[MC][0-9]{4}')
    ]),
    date: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
    ]),
    typeMelanoma: new FormControl('', Validators.required)
  });


  burnOpt: Options[] = [
    {value: '1', viewValue: 'Not burn'},
    {value: '2', viewValue: 'Burns lightly'},
    {value: '3', viewValue: 'Burns moderately'},
    {value: '4', viewValue: 'Burns severely'},
  ];

  tanOpt: ImageOptions[] = [
    {value: '1', viewValue: 'Not tan', image: 'assets/images/tans/no_tan.jpg'},
    {value: '2', viewValue: 'Tans lightly', image: 'assets/images/tans/tans_lightly.jpg'},
    {value: '3', viewValue: 'Tans moderately', image: 'assets/images/tans/tans_moderately.jpg'},
    {value: '4', viewValue: 'Tans severely', image: 'assets/images/tans/tans_deeply.jpg'},
  ];

  eyeOpt: ImageOptions[] = [
    {value: '1', viewValue: 'Light (green, blue, grey)', image: 'assets/images/eyes/light_eyes.jpg'},
    {value: '2', viewValue: 'Medium (light brown, hazel)', image: 'assets/images/eyes/middle_eyes.jpg'},
    {value: '3', viewValue: 'Dark (dark brown, black)', image: 'assets/images/eyes/dark_eyes.jpg'},
  ];

  hairOpt: ImageOptions[] = [
    {value: '1', viewValue: 'Red', image: 'assets/images/hair/red_hair.jpg'},
    {value: '2', viewValue: 'Blond', image: 'assets/images/hair/blond_hair.jpg'},
    {value: '3', viewValue: 'Light brown', image: 'assets/images/hair/light_brown_hair.jpg'},
    {value: '4', viewValue: 'Dark', image: 'assets/images/hair/dark_hair.jpg'},
    {value: '5', viewValue: 'Black', image: 'assets/images/hair/black_hair.jpg'},
  ];

  freckleOpt: ImageOptions[] = [
    {value: '1', viewValue: 'None', image: 'assets/images/freckles/no_freckles.jpg'},
    {value: '2', viewValue: 'Few', image: 'assets/images/freckles/few_freckles.jpg'},
    {value: '3', viewValue: 'Some', image: 'assets/images/freckles/some_freckles.jpg'},
    {value: '4', viewValue: 'Many', image: 'assets/images/freckles/many_freckles.jpg'},
  ];

  neviOpt: ImageOptions[] = [
    {value: '1', viewValue: 'None', image: 'assets/images/nei/no_nei.jpg'},
    {value: '2', viewValue: 'Few', image: 'assets/images/nei/few_nei.jpg'},
    {value: '3', viewValue: 'Some', image: 'assets/images/nei/some_nei.jpg'},
    {value: '4', viewValue: 'Many', image: 'assets/images/nei/many_nei.jpg'},
  ];



  constructor() {}

  ngOnInit() {
  }
}
