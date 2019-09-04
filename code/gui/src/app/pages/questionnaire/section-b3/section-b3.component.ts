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
    {value: '0', viewValue: 'SECTION_B3_SMOKER_OPT_1'},
    {value: '1', viewValue: 'SECTION_B3_SMOKER_OPT_2'},
    {value: '2', viewValue: 'SECTION_B3_SMOKER_OPT_3'},
  ];

  smokeQuantityOpt: Options[] = [
    {value: 'pack', viewValue: 'SECTION_B3_SMOKER_QUANT_OPT_1'},
    {value: 'half', viewValue: 'SECTION_B3_SMOKER_QUANT_OPT_2'},
    {value: 'occasionally', viewValue: 'SECTION_B3_SMOKER_QUANT_OPT_3'},
  ];

  vitaminPeriodOpt: Options[] = [
    {value: 'never', viewValue: 'SECTION_B3_VITAMIN_PER_OPT_1'},
    {value: '1_3_day/months', viewValue: 'SECTION_B3_VITAMIN_PER_OPT_2'},
    {value: '1_3_days/week', viewValue: 'SECTION_B3_VITAMIN_PER_OPT_3'},
    {value: '4_6_days/week', viewValue: 'SECTION_B3_VITAMIN_PER_OPT_4'},
    {value: 'everyday', viewValue: 'SECTION_B3_VITAMIN_PER_OPT_5'},
  ];

  vitaminType1: Options[] = [
    {value: 'howOftenBetaCarotene', viewValue: 'SECTION_B3_VITAMIN_OPT_1'},
    {value: 'howOftenVitaminA', viewValue: 'SECTION_B3_VITAMIN_OPT_2'},
    {value: 'howOftenVitaminC', viewValue: 'SECTION_B3_VITAMIN_OPT_3'},
    {value: 'howOftenVitaminE', viewValue: 'SECTION_B3_VITAMIN_OPT_4'},
    {value: 'howOftenVitaminD', viewValue: 'SECTION_B3_VITAMIN_OPT_5'},
    {value: 'howOftenMultivitamins', viewValue: 'SECTION_B3_VITAMIN_OPT_6'},
  ];
  vitaminType2: Options[] = [
    {value: 'howLongBetaCarotene', viewValue: 'SECTION_B3_VITAMIN_OPT_1'},
    {value: 'howLongVitaminA', viewValue: 'SECTION_B3_VITAMIN_OPT_2'},
    {value: 'howLongVitaminC', viewValue: 'SECTION_B3_VITAMIN_OPT_3'},
    {value: 'howLongVitaminE', viewValue: 'SECTION_B3_VITAMIN_OPT_4'},
    {value: 'howLongVitaminD', viewValue: 'SECTION_B3_VITAMIN_OPT_5'},
    {value: 'howLongMultivitamins', viewValue: 'SECTION_B3_VITAMIN_OPT_6'},
  ];

  vitaminFrequenceOpt: Options[] = [
    {value: 'less_year', viewValue: 'SECTION_B3_VITAMIN_FREQ_OPT_1'},
    {value: '1_4_years', viewValue: 'SECTION_B3_VITAMIN_FREQ_OPT_2'},
    {value: '5_9_years', viewValue: 'SECTION_B3_VITAMIN_FREQ_OPT_3'},
    {value: '10_years', viewValue: 'SECTION_B3_VITAMIN_FREQ_OPT_4'},
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
