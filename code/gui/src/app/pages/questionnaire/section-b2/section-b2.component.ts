import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {SectionB2} from '../../../model/SectionB2';
import {AuthenticationService} from "../../../services/authentication.service";
import {Router} from "@angular/router";
import {QuestionnaireService} from "../../../services/questionnaire.service";

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
      occupationalSunExposure: new FormControl(this.b2.occupationalSunExposure, Validators.required),
      occupationalSunExposureType: new FormControl(this.b2.occupationalSunExposureType),
      occupationalSunExposureHours: new FormControl(this.b2.occupationalSunExposureHours, [
        Validators.pattern('[0-9]{2}')
      ]),
      occupationalSunExposureDays: new FormControl(this.b2.occupationalSunExposureDays, [
        Validators.pattern('[0-9]{2}')
      ]),
      occupationalSunExposureMonths: new FormControl(this.b2.occupationalSunExposureMonths, [
        Validators.pattern('[0-9]{2}')
      ]),
      occupationalSunExposureYears: new FormControl(this.b2.occupationalSunExposureYears, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposure: new FormControl(this.b2.recreationalSunExposure, Validators.required),
      recreationalSunExposureType: new FormControl(this.b2.recreationalSunExposureType),
      recreationalSunExposureHours: new FormControl(this.b2.recreationalSunExposureHours, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposureDays: new FormControl(this.b2.recreationalSunExposureDays, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposureMonths: new FormControl(this.b2.recreationalSunExposureMonths, [
        Validators.pattern('[0-9]{2}')
      ]),
      recreationalSunExposureYears: new FormControl(this.b2.recreationalSunExposureYears, [
        Validators.pattern('[0-9]{2}')
      ]),
      intermittentExposureChildhoodWeeks: new FormControl(this.b2.intermittentExposureChildhoodWeeks, Validators.required),
      intermittentExposureChildhoodHours: new FormControl(this.b2.intermittentExposureChildhoodHours, Validators.required),
      intermittentExposureAdolescenceWeeks: new FormControl(this.b2.intermittentExposureAdolescenceWeeks, Validators.required),
      intermittentExposureAdolescenceHours: new FormControl(this.b2.intermittentExposureAdolescenceHours, Validators.required),
      intermittentExposureAdulthoodWeeks: new FormControl(this.b2.intermittentExposureAdulthoodWeeks, Validators.required),
      intermittentExposureAdulthoodHours: new FormControl(this.b2.intermittentExposureAdulthoodHours, Validators.required),
      intermittentExposureDiagnosisWeeks: new FormControl(this.b2.intermittentExposureDiagnosisWeeks, Validators.required),
      intermittentExposureDiagnosisHours: new FormControl(this.b2.intermittentExposureDiagnosisHours, Validators.required),
      lastIntenseExposure: new FormControl(this.b2.lastIntenseExposure, Validators.required),
      sunburnsLess18: new FormControl(this.b2.sunburnsLess18, Validators.required),
      sunburnsGreater17: new FormControl(this.b2.sunburnsGreater17, Validators.required),
      sunburnsMelanomaSite: new FormControl(this.b2.sunburnsMelanomaSite, Validators.required),
      sunburnsLast5: new FormControl(this.b2.sunburnsLast5, Validators.required),
      less18SunburnsNumber: new FormControl(this.b2.less18SunburnsNumber),
      greater17SunburnsNumber: new FormControl(this.b2.greater17SunburnsNumber),
      last5SunburnsNumber: new FormControl(this.b2.last5SunburnsNumber),
      sunscreenPercentageChildhood: new FormControl(this.b2.sunscreenPercentageChildhood, Validators.required),
      sunscreenTypeChildhood: new FormControl(this.b2.sunscreenTypeChildhood, Validators.required),
      sunscreenPercentageAdolescence: new FormControl(this.b2.sunscreenPercentageAdolescence, Validators.required),
      sunscreenTypeAdolescence: new FormControl(this.b2.sunscreenTypeAdolescence, Validators.required),
      sunscreenPercentageAdulthood: new FormControl(this.b2.sunscreenPercentageAdulthood, Validators.required),
      sunscreenTypeAdulthood: new FormControl(this.b2.sunscreenTypeAdulthood, Validators.required),
      sunscreenPercentageMelanoma: new FormControl(this.b2.sunscreenPercentageMelanoma, Validators.required),
      sunscreenTypeMelanoma: new FormControl(this.b2.sunscreenTypeMelanoma, Validators.required),
      sunlamps: new FormControl(this.b2.sunlamps, Validators.required),
      numberSunlamps: new FormControl(this.b2.numberSunlamps),
      ageFirstSunlamps: new FormControl(this.b2.ageFirstSunlamps),
      ageLastSunlamps: new FormControl(this.b2.ageLastSunlamps),
    });
  }

  save() {
    this.b2 = new SectionB2(this.form);

    console.log(this.b2);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'b1', this.b2).subscribe( (res) => {
      console.log(res);
    });
  }
}
