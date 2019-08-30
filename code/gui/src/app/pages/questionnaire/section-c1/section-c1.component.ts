import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import {SectionC1, NeviCount, CurrentNonMelanomaSkinCancers} from '../../../model/SectionC1';

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
      this.buildForm();
    });
  }

   buildForm() {
     this.form = new FormGroup({
       howManySolarLentigines: new FormControl(this.c1.solarLentigines.howMany, [Validators.required]),
       solarLentiginesAtSiteOfMelanoma: new FormControl(this.c1.solarLentigines.atSiteOfMelanoma,
         [Validators.required]),
       neviCountLeftScalp: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_SCALP].leftZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountRightScalp: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_SCALP].rightZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountLeftFace: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_FACE].leftZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountRightFace: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_FACE].rightZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountLeftNeck: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_NECK].leftZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountRightNeck: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_NECK].rightZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountLeftAbdomen: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_ABDOMEN].leftZoneNumber, Validators.pattern('[0-9]{1,3}') ),
       neviCountRightAbdomen: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_ABDOMEN].rightZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountLeftBack: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_BACK].leftZoneNumber,
         [Validators.required] ),
       neviCountRightBack: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_BACK].rightZoneNumber,
         [Validators.required]),
       neviCountLeftDeltoid: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_DELTOID].leftZoneNumber,
         [Validators.required]),
       neviCountRightDeltoid: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_DELTOID].rightZoneNumber,
         [Validators.required]),
       neviCountLeftGluteus: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_GLUTEUS].leftZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountRightGluteus: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_GLUTEUS].rightZoneNumber, Validators.pattern('[0-9]{1,3}') ),
       neviCountLeftPalms: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_PALMS].leftZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountRightPalms: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_PALMS].rightZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountLeftSoles: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_SOLES].leftZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountRightSoles: new FormControl(this.c1.neviCountGreatherThan2mm[NeviCount.KEY_SOLES].rightZoneNumber, Validators.pattern('[0-9]{1,3}')),
       neviCountLessThan2mm: new FormControl(this.c1.neviCountLessThan2mm, [Validators.required]),
       howManyClinicallyAtypicalNevi: new FormControl(this.c1.clinicallyAtypicalNevi.howMany,
         [Validators.required, Validators.pattern('[0-9]{1,3}')]),
       clinicallyAtypicalNeviAtSiteOfMelanoma: new FormControl(this.c1.clinicallyAtypicalNevi.atSiteOfMelanoma,
         [Validators.required]),
       presenceOfMediumSizedNevi: new FormControl(this.c1.congenitalNevi.presenceOfMediumSizedNevi, [Validators.required]),
       siteOfMediumSizedNevi: new FormControl(this.c1.congenitalNevi.siteOfMediumSizedNevi,
         [Validators.pattern('[a-zA-Z]*')]),
       presenceOfLargeSizedNevi: new FormControl(this.c1.congenitalNevi.presenceOfLargeSizedNevi, [Validators.required]),
       siteOfLargeSizedNevi: new FormControl(this.c1.congenitalNevi.siteOfLargeSizedNevi,
         [Validators.pattern('[a-zA-Z]*')]),
       presenceOfGiantNevi: new FormControl(this.c1.congenitalNevi.presenceOfGiantNevi, [Validators.required]),
       siteOfGiantSizedNevi: new FormControl(this.c1.congenitalNevi.siteOfGiantSizedNevi,
         [Validators.pattern('[a-zA-Z]*')]),
       blueNeviPresence: new FormControl(this.c1.blueNevi.presence, [Validators.required]),
       numberOfBlueNevi: new FormControl(this.c1.blueNevi.number, [Validators.pattern('[0-9]{1,3}')]),
       actinicKeratosesPresence: new FormControl(this.c1.actinicKeratoses.presence, [Validators.required]),
       actinicKeratosesSite: new FormControl(this.c1.actinicKeratoses.site,
         [Validators.pattern('[a-zA-Z]*')]),
       actinicKeratosesTypeOfDistribution: new FormControl(this.c1.actinicKeratoses.typeOfDistribution),
       bCCPresence: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_BCC].presence,
         [Validators.required]),
       bCCSite: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_BCC].site,
         [Validators.pattern('[a-zA-Z]*')]),
       bCCNumber: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_BCC].number,
          [Validators.pattern('[0-9]{1,3}')]),
       iSCCPresence: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_ISCC].presence,
         [Validators.required]),
       iSCCSite: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_ISCC].site,
         [Validators.pattern('[a-zA-Z]*')]),
       iSCCNumber: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_ISCC].number,
         [Validators.pattern('[0-9]{1,3}')]),
       sSCCPresence: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_SSCC].presence,
         [Validators.required]),
       sSCCSite: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_SSCC].site,
         [Validators.pattern('[a-zA-Z]*')]),
       sSCCNumber: new FormControl(this.c1.currentNonMelanomaSkinCancers[CurrentNonMelanomaSkinCancers.KEY_BCC].number,
         [Validators.pattern('[0-9]{1,3}')]),
       });
   }

  save() {
    this.c1 = new SectionC1(this.form);

    console.log(this.c1);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'c1', this.c1).subscribe( (res) => {
      console.log(res);
    });
  }
}
