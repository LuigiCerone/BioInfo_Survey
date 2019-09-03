import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { SectionB3, Vitamin } from '../../../model/SectionB3';
import {AuthenticationService} from "../../../services/authentication.service";
import { ActivatedRoute, Router } from '@angular/router';
import {QuestionnaireService} from "../../../services/questionnaire.service";

@Component({
  selector: 'app-section-b3',
  templateUrl: './section-b3.component.html',
  styleUrls: ['./section-b3.component.css']
})
export class SectionB3Component implements OnInit {
  form: FormGroup;

  smokerOpt: Options[] = [
    {value: '0', viewValue: 'Never'},
    {value: '1', viewValue: 'Former smoker (quit one year before diagnosis or earlier)'},
    {value: '2', viewValue: 'Current smoker'},
  ];

  smokeQuantityOpt: Options[] = [
    {value: 'pack', viewValue: 'One pack/day or more'},
    {value: 'half', viewValue: 'Up to half pack/day'},
    {value: 'occasionally', viewValue: 'Only occasionally'},
  ];

  vitaminPeriodOpt: Options[] = [
    {value: 'never', viewValue: 'Never'},
    {value: '1_3_day/months', viewValue: '1-2 days / month'},
    {value: '1_3_days/week', viewValue: '1-3 days/week'},
    {value: '4_6_days/week', viewValue: '4-6 days/week'},
    {value: 'everyday', viewValue: 'everyday'},
  ];

  vitaminType1: Options[] = [
    {value: 'howOftenBetaCarotene', viewValue: 'Beta-Carotene'},
    {value: 'howOftenVitaminA', viewValue: 'Vitamin A'},
    {value: 'howOftenVitaminC', viewValue: 'Vitamin C'},
    {value: 'howOftenVitaminE', viewValue: 'Vitamin E'},
    {value: 'howOftenVitaminD', viewValue: 'Vitamin D'},
    {value: 'howOftenMultivitamins', viewValue: 'Multivitamins'},
  ];
  vitaminType2: Options[] = [
    {value: 'howLongBetaCarotene', viewValue: 'Beta-Carotene'},
    {value: 'howLongVitaminA', viewValue: 'Vitamin A'},
    {value: 'howLongVitaminC', viewValue: 'Vitamin C'},
    {value: 'howLongVitaminE', viewValue: 'Vitamin E'},
    {value: 'howLongVitaminD', viewValue: 'Vitamin D'},
    {value: 'howLongMultivitamins', viewValue: 'Multivitamins'},
  ];

  vitaminFrequenceOpt: Options[] = [
    {value: 'less_year', viewValue: '< 1 year'},
    {value: '1_4_years', viewValue: '1/4 years'},
    {value: '5_9_years', viewValue: '5/9 years'},
    {value: '10_years', viewValue: 'Equal or more than 10 years'},
  ];


  private b3: SectionB3;
  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);

    this.questionnaireService.getQuestionnaireForUser(this.username, 'b3').subscribe( (section: SectionB3) => {
      console.log(section);
      if (section) {
        this.b3 = section;
      } else {
        this.b3 = new SectionB3();
      }
      this.buildForm();
    });
  }

  buildForm() {
     this.form = new FormGroup({
       smoker: new FormControl(this.b3.smoker.howOften, [Validators.required]),
       ageWhenStartedSmoking: new FormControl(this.b3.smoker.ageWhenStartedSmoking),
       howLongHaveYouBeenSmoking: new FormControl(this.b3.smoker.howLongHaveYouBeenSmoking),
       howMuchTipicallySmoke: new FormControl(this.b3.smoker.howMuchTipicallySmoke),

       intakeOfVitaminesDuringLastYears: new FormControl(this.b3.intakeOfVitaminesDuringLastYears, [Validators.required]),
       frequencyOfVitaminsDuringLastYears: new FormControl(this.b3.frequencyOfVitaminsDuringLastYears, [Validators.required]),

       howOftenBetaCarotene: new FormControl(this.b3.vitamin[Vitamin.BETA_CAROTENE].howOften),
       howLongBetaCarotene: new FormControl(this.b3.vitamin[Vitamin.BETA_CAROTENE].howLong ),

       howOftenVitaminA: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_A].howOften  ),
       howLongVitaminA: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_A].howLong),

       howOftenVitaminC: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_C].howOften),
       howLongVitaminC: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_C].howLong),

       howOftenVitaminE: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_E].howOften),
       howLongVitaminE: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_E].howLong),

       howOftenVitaminD: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_D].howOften),
       howLongVitaminD: new FormControl(this.b3.vitamin[Vitamin.VITAMIN_D].howLong),

       howOftenMultivitamins: new FormControl(this.b3.vitamin[Vitamin.MULTIVITAMINS].howOften),
       howLongMultivitamins: new FormControl(this.b3.vitamin[Vitamin.MULTIVITAMINS].howLong),
       });
  }

  save() {
    this.b3 = new SectionB3(this.form);

    console.log(this.b3);
    this.questionnaireService.insertSection(this.username, 'b3', this.b3).subscribe( (res) => {
      console.log(res);
    });
  }
}
