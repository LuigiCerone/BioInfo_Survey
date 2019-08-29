import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {SectionB3} from '../../../model/SectionB3';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import {SectionC1} from '../../../model/SectionC1';

@Component({
  selector: 'app-section-c1',
  templateUrl: './section-c1.component.html',
  styleUrls: ['./section-c1.component.css']
})
export class SectionC1Component implements OnInit {
  form: FormGroup;

  distributionOpt: Options[] = [
    {value: 'isolated', viewValue: 'Isolated / Scattered'},
    {value: 'clustered', viewValue: 'Clustered'},
    {value: 'confluent', viewValue: 'Confluent'},
  ];
  lentiginesOpt: Options[] = [
    {value: 'none', viewValue: 'None'},
    {value: 'few', viewValue: 'Few'},
    {value: 'many', viewValue: 'Many'},
  ];

  neviLess2mmOpt: Options[] = [
    {value: '0', viewValue: '0'},
    {value: '50', viewValue: '1-50'},
    {value: '100', viewValue: '51-100'},
    {value: '200', viewValue: '101-200'},
    {value: '201', viewValue: '> 200'},
  ];

  vitaminType1: Options[] = [
    {value: 'betaCarotene1', viewValue: 'Beta-Carotene'},
    {value: 'vitaminA1', viewValue: 'Vitamin A'},
    {value: 'vitaminC1', viewValue: 'Vitamin C'},
    {value: 'vitaminE1', viewValue: 'Vitamin E'},
    {value: 'vitaminD1', viewValue: 'Vitamin D'},
    {value: 'multivitamins1', viewValue: 'Multivitamins'},
  ];
  vitaminType2: Options[] = [
    {value: 'betaCarotene2', viewValue: 'Beta-Carotene'},
    {value: 'vitaminA2', viewValue: 'Vitamin A'},
    {value: 'vitaminC2', viewValue: 'Vitamin C'},
    {value: 'vitaminE2', viewValue: 'Vitamin E'},
    {value: 'vitaminD2', viewValue: 'Vitamin D'},
    {value: 'multivitamins2', viewValue: 'Multivitamins'},
  ];

  vitaminFrequenceOpt: Options[] = [
    {value: 'less_year', viewValue: '< 1 year'},
    {value: '1_4_years', viewValue: '1/4 years'},
    {value: '5_9_years', viewValue: '5/9 years'},
    {value: '10_years', viewValue: 'Equal or more than 10 years'},
  ];


  private c1: SectionC1;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'c1').subscribe( (section: SectionC1) => {
      console.log(section);
      if (section) {
        this.c1 = section;
      } else {
        this.c1 = new SectionC1();
      }
      // this.buildForm();
    });
  }

  // buildForm() {
  //   this.form = new FormGroup({
  //     smoker: new FormControl(this.b3.smoker, [Validators.required]),
  //     ageStartSmoking: new FormControl(this.b3.ageStartSmoking, [Validators.required]),
  //     yearsSmoking: new FormControl(this.b3.yearsSmoking, [Validators.required]),
  //     packPerDay: new FormControl(this.b3.packPerDay, [Validators.required]),
  //     halfPackPerDay: new FormControl(this.b3.halfPackPerDay, [Validators.required]),
  //     occasionallySmoke: new FormControl(this.b3.occasionallySmoke, [Validators.required]),
  //     everReceivedVitamins: new FormControl(this.b3.everReceivedVitamins, [Validators.required]),
  //     vitaminPills: new FormControl(this.b3.vitaminPills, [Validators.required]),
  //     betaCarotene1: new FormControl(this.b3.betaCarotene1 ),
  //     vitaminA1: new FormControl(this.b3.vitaminA1, [Validators.required] ),
  //     vitaminB1: new FormControl(this.b3.vitaminB1, [Validators.required] ),
  //     vitaminC1: new FormControl(this.b3.vitaminC1, [Validators.required]),
  //     vitaminE1: new FormControl(this.b3.vitaminE1, [Validators.required]),
  //     vitaminD1: new FormControl(this.b3.vitaminD1, [Validators.required]),
  //     multivitamins1: new FormControl(this.b3.multivitamins1, [Validators.required]),
  //     betaCarotene2: new FormControl(this.b3.betaCarotene1 ),
  //     vitaminA2: new FormControl(this.b3.vitaminA2, [Validators.required] ),
  //     vitaminB2: new FormControl(this.b3.vitaminB2, [Validators.required] ),
  //     vitaminC2: new FormControl(this.b3.vitaminC2, [Validators.required]),
  //     vitaminE2: new FormControl(this.b3.vitaminE2, [Validators.required]),
  //     vitaminD2: new FormControl(this.b3.vitaminD2, [Validators.required]),
  //     multivitamins2: new FormControl(this.b3.multivitamins2, [Validators.required]),
  //     });
  // }

  save() {
    this.c1 = new SectionC1(this.form);

    console.log(this.c1);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'c1', this.c1).subscribe( (res) => {
      console.log(res);
    });
  }
}
