import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';

@Component({
  selector: 'app-section-a2',
  templateUrl: './section-a2.component.html',
  styleUrls: ['./section-a2.component.css']
})
export class SectionA2Component implements OnInit {

  form: FormGroup = new FormGroup({
    sex: new FormControl('', [Validators.required]),
    cityOfBirth: new FormControl('', [Validators.required]),
    provinceOfBirth: new FormControl('', [Validators.required]),
    countryOfBirth: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
    ]),
    height: new FormControl('', [Validators.required]),
    weight: new FormControl('', [Validators.required]),
    ethnicity: new FormControl('', [Validators.required]),
    otherEthnicity: new FormControl('' ),
    actualCity: new FormControl('', [Validators.required] ),
    actualProvince: new FormControl('', [Validators.required] ),
    actualCountry: new FormControl('', [Validators.required]),
    years: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9]{4}[/][0-9]{4}')
    ]),
    education: new FormControl('', [Validators.required]),
    occupation: new FormControl('', [Validators.required]),
  });
  sexOpt: Options[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
  ];
  ethnicityOpt: Options[] = [
    {value: 'europe', viewValue: 'Europe'},
    {value: 'north_africa', viewValue: 'North Africa'},
    {value: 'north_africa', viewValue: 'North Africa'},
    {value: 'middle_east', viewValue: 'Middle East'},
    {value: 'jewish', viewValue: 'Jewish ancestry'},
    {value: 'black', viewValue: 'Black or African American'},
    {value: 'asian', viewValue: 'Asian'},
    {value: 'hispanic', viewValue: 'Hispanic or Latino'},
    {value: 'other', viewValue: 'Other'},
  ];

  educationOpt: Options[] = [
    {value: 'junior', viewValue: 'Up to junior high school (up to 14-16 yrs)'},
    {value: 'high', viewValue: 'High school (up to 18-19 yrs)'},
    {value: 'university', viewValue: 'University'},
  ];

  occupationOpt: Options[] = [
    {value: 'employed', viewValue: 'Employed'},
    {value: 'work_at_home', viewValue: 'Working at home'},
    {value: 'unemployed', viewValue: 'Unemployed'},
    {value: 'student', viewValue: 'Student'},
    {value: 'retired', viewValue: 'Retired'},
  ];
  selectedValue = '';
  constructor() {}
  @Input() pattern: string | RegExp;
  @Input() error: string | null;
  ngOnInit() {

  }

}
