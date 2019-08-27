import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { IntermittentSunExposure, SectionB2, SevereSunBurns, SunscreenUse } from '../../../model/SectionB2';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';


@Component({
  selector: 'app-section-b2',
  templateUrl: './section-b2.component.html',
  styleUrls: ['./section-b2.component.css']
})
export class SectionB2Component implements OnInit {
  form: FormGroup;

  yesNoOpt: Options[] = [
    {value: '1', viewValue: 'Yes'},
    {value: '0', viewValue: 'No'},
  ];
  yesNoNotKnownOpt: Options[] = [
    {value: '1', viewValue: 'Yes'},
    {value: '0', viewValue: 'No'},
    {value: '2', viewValue: 'Not known'},
  ];

  sunscreenPercentageOpt: Options[] = [
    {value: 'never', viewValue: 'Never'},
    {value: 'less-50', viewValue: '< 50% of time exposure'},
    {value: 'more-50', viewValue: '> 50% of time exposure'},
    {value: 'always', viewValue: 'Always'},
    {value: '0', viewValue: 'Not know'},
  ];
  sunscreenTypeOpt: Options[] = [
    {value: 'less-20', viewValue: 'SPF<20'},
    {value: 'more-20', viewValue: 'SPF>20'},
    {value: '0', viewValue: 'Not know'},
  ];

  private b2: SectionB2;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'b2').subscribe( (section: SectionB2) => {
      console.log(section);
      if (section) {
        this.b2 = section;
      } else {
        this.b2 = new SectionB2();
      }
      this.buildForm();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      occupationalSunExposure: new FormControl(this.b2.occupationalSunExposure.isTrue, Validators.required),
      occupationalSunExposureType: new FormControl(this.b2.occupationalSunExposure.occupation),
      occupationalSunExposureHours: new FormControl(this.b2.occupationalSunExposure.hoursPerDay, [
        Validators.pattern('[0-9]{2}')
      ]),
      occupationalSunExposureDays: new FormControl(this.b2.occupationalSunExposure.daysPerMonth, [
        Validators.pattern('[0-9]{2}')
      ]),
      occupationalSunExposureMonths: new FormControl(this.b2.occupationalSunExposure.monthsPerYear, [
        Validators.pattern('[0-9]{2}')
      ]),
      occupationalSunExposureYears: new FormControl(this.b2.occupationalSunExposure.years, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposure: new FormControl(this.b2.recreationalSunExposure.isTrue, Validators.required),
      recreationalSunExposureType: new FormControl(this.b2.recreationalSunExposure.activity),
      recreationalSunExposureHours: new FormControl(this.b2.recreationalSunExposure.hoursPerDay, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposureDays: new FormControl(this.b2.recreationalSunExposure.daysPerMonth, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposureMonths: new FormControl(this.b2.recreationalSunExposure.monthsPerYear, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposureYears: new FormControl(this.b2.recreationalSunExposure.years, [
        Validators.pattern('[0-9]{2}')
      ]),

      intermittentExposureChildhoodWeeks: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_CHILDHOOD).weeksOfVacation, Validators.required),
      intermittentExposureChildhoodHours: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_CHILDHOOD).hoursSpentBetween11AMAnd4PM, Validators.required),
      intermittentExposureAdolescenceWeeks: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_ADOLESCENCE).weeksOfVacation, Validators.required),
      intermittentExposureAdolescenceHours: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_ADOLESCENCE).hoursSpentBetween11AMAnd4PM, Validators.required),
      intermittentExposureAdulthoodWeeks: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_ADULTHOOD).weeksOfVacation, Validators.required),
      intermittentExposureAdulthoodHours: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_ADULTHOOD).hoursSpentBetween11AMAnd4PM, Validators.required),
      intermittentExposureDiagnosisWeeks: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_TEN_YEARS).weeksOfVacation, Validators.required),
      intermittentExposureDiagnosisHours: new FormControl(this.b2.intermittentSunExposure.get(IntermittentSunExposure.KEY_TEN_YEARS).hoursSpentBetween11AMAnd4PM, Validators.required),

      lastIntenseExposure: new FormControl(this.b2.mostRecentIntermittentSunExposure, Validators.required),

      sunburnsLess18: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_MINOR_18).presence, Validators.required),
      less18SunburnsNumber: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_MINOR_18).number),

      sunburnsGreater18: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_GREATER_18).presence, Validators.required),
      greater18SunburnsNumber: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_GREATER_18).number),

      sunburnsMelanomaSite: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_AT_SITE).presence, Validators.required),

      sunburnsLast5: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_LAST_5).presence, Validators.required),
      last5SunburnsNumber: new FormControl(this.b2.severeSunBurns.get(SevereSunBurns.KEY_LAST_5).presence),

      sunscreenPercentageChildhood: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_CHILDHOOD).howOften, Validators.required),
      sunscreenTypeChildhood: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_CHILDHOOD).type, Validators.required),

      sunscreenPercentageAdolescence: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_ADOLESCENCE).howOften, Validators.required),
      sunscreenTypeAdolescence: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_ADOLESCENCE).type, Validators.required),

      sunscreenPercentageAdulthood: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_ADULTHOOD).howOften, Validators.required),
      sunscreenTypeAdulthood: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_ADULTHOOD).type, Validators.required),

      sunscreenPercentageMelanoma: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_TEN_YEARS).howOften, Validators.required),
      sunscreenTypeMelanoma: new FormControl(this.b2.sunscreenUses.get(SunscreenUse.KEY_ADULTHOOD).type, Validators.required),


      sunlamps: new FormControl(this.b2.sunlampsSunbeds.isTrue, Validators.required),
      numberSunlamps: new FormControl(this.b2.sunlampsSunbeds.lifetimeNumberOfSession),
      ageFirstSunlamps: new FormControl(this.b2.sunlampsSunbeds.ageAtFirstExposure),
      ageLastSunlamps: new FormControl(this.b2.sunlampsSunbeds.ageAtLastExposure),
    });
  }

  save() {
    console.log(this.form);

    this.b2 = new SectionB2(this.form);

    console.log(this.b2);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'b2', this.b2).subscribe( (res) => {
      console.log(res);
    });
  }
}
