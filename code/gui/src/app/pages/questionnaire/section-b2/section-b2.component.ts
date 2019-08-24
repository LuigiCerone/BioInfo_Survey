import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';

@Component({
  selector: 'app-section-b1',
  templateUrl: './section-b2.component.html',
  styleUrls: ['./section-b2.component.css']
})
export class SectionB2Component implements OnInit {
  form: FormGroup = new FormGroup({
    occupationalSunExposure: new FormControl('', Validators.required),
    occupationalSunExposureType: new FormControl(''),
    occupationalSunExposureHours: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    occupationalSunExposureDays: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    occupationalSunExposureMonths: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    occupationalSunExposureYears: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    recreationalSunExposure: new FormControl('', Validators.required),
    recreationalSunExposureType: new FormControl(''),
    recreationalSunExposureHours: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    recreationalSunExposureDays: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    recreationalSunExposureMonths: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    recreationalSunExposureYears: new FormControl('', [
      Validators.pattern('[0-9]{2}')
    ]),
    intermittentExposureChildhoodWeeks: new FormControl('', Validators.required),
    intermittentExposureChildhoodHours: new FormControl('', Validators.required),
    intermittentExposureAdolescenceWeeks: new FormControl('', Validators.required),
    intermittentExposureAdolescenceHours: new FormControl('', Validators.required),
    intermittentExposureAdulthoodWeeks: new FormControl('', Validators.required),
    intermittentExposureAdulthoodHours: new FormControl('', Validators.required),
    intermittentExposureDiagnosisWeeks: new FormControl('', Validators.required),
    intermittentExposureDiagnosisHours: new FormControl('', Validators.required),
    lastIntenseExposure: new FormControl('', Validators.required),
    sunburnsLess18: new FormControl('', Validators.required),
    sunburnsGreather17: new FormControl('', Validators.required),
    sunburnsMelanomaSite: new FormControl('', Validators.required),
    sunburnsLast5: new FormControl('', Validators.required),
    less18SunburnsNumber: new FormControl(''),
    greather17SunburnsNumber: new FormControl(''),
    last5SunburnsNumber: new FormControl(''),
    sunscreenPercentageChildhood: new FormControl('', Validators.required),
    sunscreenTypeChildhood: new FormControl('', Validators.required),
    sunscreenPercentageAdolescence: new FormControl('', Validators.required),
    sunscreenTypeAdolescence: new FormControl('', Validators.required),
    sunscreenPercentageAdulthood: new FormControl('', Validators.required),
    sunscreenTypeAdulthood: new FormControl('', Validators.required),
    sunscreenPercentageMelanoma: new FormControl('', Validators.required),
    sunscreenTypeMelanoma: new FormControl('', Validators.required),
    sunlamps: new FormControl('', Validators.required),
    numberSunlamps: new FormControl(''),
    ageFirstSunlamps: new FormControl(''),
    ageLastSunlamps: new FormControl(''),
  });

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



  constructor() {}

  ngOnInit() {
  }
}
