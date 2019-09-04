import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import { IntermittentSunExposure, SectionB2, SevereSunBurns, SunscreenUse } from '../../../model/SectionB2';
import {AuthenticationService} from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';


@Component({
  selector: 'app-section-b2',
  templateUrl: './section-b2.component.html',
  styleUrls: ['./section-b2.component.css']
})
export class SectionB2Component implements OnInit {
  form: FormGroup;

  sunscreenPercentageOpt: Options[] = [
    { value: 'never', viewValue: 'SECTION_B2_SUNSCR_OPT_1' },
    { value: 'less-50', viewValue: 'SECTION_B2_SUNSCR_OPT_2' },
    { value: 'more-50', viewValue: 'SECTION_B2_SUNSCR_OPT_3' },
    { value: 'always', viewValue: 'SECTION_B2_SUNSCR_OPT_4' },
    { value: '0', viewValue: 'SECTION_B2_SUNSCR_OPT_5' },
  ];
  sunscreenTypeOpt: Options[] = [
    { value: 'less-20', viewValue: 'SECTION_B2_SUNSCR_TYPE_OPT_1' },
    { value: 'more-20', viewValue: 'SECTION_B2_SUNSCR_TYPE_OPT_2' },
    { value: '0', viewValue: 'SECTION_B2_SUNSCR_TYPE_OPT_3' },
  ];

  uvrOpt: Options[] = [
    { value: 'rarely', viewValue: 'SECTION_B2_UVR_OPT_1' },
    { value: 'sometimes', viewValue: 'SECTION_B2_UVR_OPT_2' },
    { value: 'always', viewValue: 'SECTION_B2_UVR_OPT_3' },
    { value: '0', viewValue: 'SECTION_B2_UVR_OPT_4' },
  ];

  uvpuvaOpt: Options[] = [
    { value: 'never', viewValue: 'SECTION_B2_UVP_OPT_1' },
    { value: 'ever', viewValue: 'SECTION_B2_UVP_OPT_2' },
  ];

  private b2: SectionB2;

  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService) {
  }

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);

    this.questionnaireService.getQuestionnaireForUser(this.username, 'b2').subscribe((section: SectionB2) => {
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
      occupationalSunExposure: new FormControl(this.b2.occupationalSunExposure.true, Validators.required),
      occupationalSunExposureType: new FormControl(this.b2.occupationalSunExposure.occupation, Validators.pattern('[a-zA-Z]*')),
      occupationalSunExposureHours: new FormControl(this.b2.occupationalSunExposure.hoursPerDay, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      occupationalSunExposureDays: new FormControl(this.b2.occupationalSunExposure.daysPerMonth, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      occupationalSunExposureMonths: new FormControl(this.b2.occupationalSunExposure.monthsPerYear, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      occupationalSunExposureYears: new FormControl(this.b2.occupationalSunExposure.years, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      recreationalSunExposure: new FormControl(this.b2.recreationalSunExposure.true, Validators.required),
      recreationalSunExposureType: new FormControl(this.b2.recreationalSunExposure.activity),
      recreationalSunExposureHours: new FormControl(this.b2.recreationalSunExposure.hoursPerDay, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      recreationalSunExposureDays: new FormControl(this.b2.recreationalSunExposure.daysPerMonth, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      recreationalSunExposureMonths: new FormControl(this.b2.recreationalSunExposure.monthsPerYear, [
        Validators.pattern('[0-9]{1,2}')
      ]),
      recreationalSunExposureYears: new FormControl(this.b2.recreationalSunExposure.years, [
        Validators.pattern('[0-9]{1,2}')
      ]),

      intermittentExposureChildhoodWeeks: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_CHILDHOOD].weeksOfVacation, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureChildhoodHours: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_CHILDHOOD].hoursSpentBetween11AMAnd4PM, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureAdolescenceWeeks: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_ADOLESCENCE].weeksOfVacation, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureAdolescenceHours: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_ADOLESCENCE].hoursSpentBetween11AMAnd4PM, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureAdulthoodWeeks: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_ADULTHOOD].weeksOfVacation, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureAdulthoodHours: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_ADULTHOOD].hoursSpentBetween11AMAnd4PM, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureDiagnosisWeeks: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_TEN_YEARS].weeksOfVacation, Validators.pattern('[0-9]{1,3}')),
      intermittentExposureDiagnosisHours: new FormControl(this.b2.intermittentSunExposure[IntermittentSunExposure.KEY_TEN_YEARS].hoursSpentBetween11AMAnd4PM, Validators.pattern('[0-9]{1,3}')),

      lastIntenseExposure: new FormControl(this.b2.mostRecentIntermittentSunExposure, Validators.required),

      sunburnsLess18: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_MINOR_18].presence, Validators.required),
      less18SunburnsNumber: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_MINOR_18].number, Validators.pattern('[0-9]{1,2}')),

      sunburnsGreater18: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_GREATER_18].presence, Validators.required),
      greater18SunburnsNumber: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_GREATER_18].number, Validators.pattern('[0-9]{1,2}')),

      sunburnsMelanomaSite: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_AT_SITE].presence, Validators.required),

      sunburnsLast5: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_LAST_5].presence, Validators.required),
      last5SunburnsNumber: new FormControl(this.b2.severeSunBurns[SevereSunBurns.KEY_LAST_5].number, Validators.pattern('[0-9]{1,2}')),

      sunscreenPercentageChildhood: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_CHILDHOOD].howOften, Validators.required),
      sunscreenTypeChildhood: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_CHILDHOOD].type, Validators.required),

      sunscreenPercentageAdolescence: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_ADOLESCENCE].howOften, Validators.required),
      sunscreenTypeAdolescence: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_ADOLESCENCE].type, Validators.required),

      sunscreenPercentageAdulthood: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_ADULTHOOD].howOften, Validators.required),
      sunscreenTypeAdulthood: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_ADULTHOOD].type, Validators.required),

      sunscreenPercentageMelanoma: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_TEN_YEARS].howOften, Validators.required),
      sunscreenTypeMelanoma: new FormControl(this.b2.sunscreenUses[SunscreenUse.KEY_TEN_YEARS].type, Validators.required),


      sunlamps: new FormControl(this.b2.sunlampsSunbeds.true, Validators.required),
      numberSunlamps: new FormControl(this.b2.sunlampsSunbeds.lifetimeNumberOfSession, Validators.pattern('[0-9]{1,3}')),
      ageFirstSunlamps: new FormControl(this.b2.sunlampsSunbeds.ageAtFirstExposure, Validators.pattern('[0-9]{1,3}')),
      ageLastSunlamps: new FormControl(this.b2.sunlampsSunbeds.ageAtLastExposure, Validators.pattern('[0-9]{1,3}')),
      sunProtectionOtherThanSunscreenUseHat: new FormControl(this.b2.sunProtectionOtherThanSunscreenUseHat),
      sunProtectionOtherThanSunscreenUseClothing: new FormControl(this.b2.sunProtectionOtherThanSunscreenUseClothing),
      seekTheShadeDuringUVRHours: new FormControl(this.b2.seekTheShadeDuringUVRHours),
      phototherapyUvpuva: new FormControl(this.b2.phototherapyUvpuva)
    });
  }

  save() {
    console.log(this.form);

    this.b2 = new SectionB2(this.form);

    console.log(this.b2);

    this.questionnaireService.insertSection(this.username, 'b2', this.b2).subscribe((res) => {
      console.log(res);
    });
  }

  transformMap(map) {
    const out = Object.create(null);
    map.forEach((value, key) => {
      if (value instanceof Map) {
        out[ key ] = this.transformMap(value);
      } else {
        out[ key ] = value;
      }
    });
    return out;
  }
}
