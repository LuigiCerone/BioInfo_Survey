import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from "../section-a1/section-a1.component";
import { SectionA1 } from '../../../model/SectionA1';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { SectionA2 } from '../../../model/SectionA2';

@Component({
  selector: 'app-section-a2',
  templateUrl: './section-a2.component.html',
  styleUrls: ['./section-a2.component.css']
})
export class SectionA2Component implements OnInit {

  form: FormGroup;

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

  private a2: SectionA2;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'a2').subscribe( (section: SectionA2) => {
      console.log(section);
      if (section) {
        this.a2 = section;
      } else {
        this.a2 = new SectionA2();
      }
      this.buildForm();
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
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'a2', this.a2).subscribe( (res) => {
      console.log(res);
    });
  }

  /* This method is used to select ion-select item according to model status. */
  sexSelected(o1: string, o2: string) {
    return o1 && o2 ? o1.toLowerCase() === o2.toLowerCase() : o1 === o2;
  }
}
