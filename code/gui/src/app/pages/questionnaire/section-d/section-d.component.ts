import { Component, Input, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {AuthenticationService} from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import {SectionD} from '../../../model/SectionD';

@Component({
  selector: 'app-section-d',
  templateUrl: './section-d.component.html',
  styleUrls: ['./section-d.component.css']
})
export class SectionDComponent implements OnInit {
  form: FormGroup;

  @Input()
  type: number;

  detectionOpt: Options[] = [
    {value: 'patient', viewValue: 'Patient'},
    {value: 'relative', viewValue: 'Relative/Spouse/Friend'},
    {value: 'physician', viewValue: 'Physician'},
    {value: 'other', viewValue: 'Other'},
  ];
  skinExamOpt: Options[] = [
    {value: 'never', viewValue: 'Never'},
    {value: 'once', viewValue: 'Once'},
    {value: 'once_year', viewValue: 'Once/year'},
    {value: 'more_than_once_year', viewValue: 'More than once/year'},
  ];

  skinExamPhysicianOpt: Options[] = [
    {value: 'never', viewValue: 'Never'},
    {value: 'once', viewValue: 'Once'},
    {value: 'once_year', viewValue: 'Once/year'},
    {value: 'not_recall', viewValue: 'Do not recall a physician ever examining my skin'},
  ];

  siteOpt: Options[] = [
    {value: 'abdomen_left', viewValue: 'abdomen_left'},
    {value: 'abdomen_middle', viewValue: 'abdomen_middle'},
    {value: 'abdomen_right', viewValue: 'abdomen_right'},
    {value: 'anus', viewValue: 'anus'},
    {value: 'arm_left_anterior', viewValue: 'arm_left_anterior'},
    {value: 'arm_left_posterior', viewValue: 'arm_left_posterior'},
    {value: 'arm_right_anterior', viewValue: 'arm_right_anterior'},
    {value: 'arm_right_posterior', viewValue: 'arm_right_posterior'},
    {value: 'axilla_left', viewValue: 'axilla_left'},
    {value: 'axilla_right', viewValue: 'axilla_right'},
    {value: 'back_left', viewValue: 'back_left'},
    {value: 'back_middle', viewValue: 'back_middle'},
    {value: 'back_right', viewValue: 'back_right'},
    {value: 'buttock_left', viewValue: 'buttock_left'},
    {value: 'buttock_right', viewValue: 'buttock_right'},
    {value: 'cheek_left', viewValue: 'cheek_left'},
    {value: 'cheek_right', viewValue: 'cheek_right'},
    {value: 'chest_left', viewValue: 'chest_left'},
    {value: 'chest_middle', viewValue: 'chest_middle'},
    {value: 'chest_right', viewValue: 'chest_right'},
    {value: 'chin', viewValue: 'chin'},
    {value: 'ear_left', viewValue: 'ear_left'},
    {value: 'ear_right', viewValue: 'ear_right'},
    {value: 'eye_left', viewValue: 'eye_left'},
    {value: 'eye_right', viewValue: 'eye_right'},
    {value: 'eyelid_left', viewValue: 'eyelid_left'},
    {value: 'eyelid_right', viewValue: 'eyelid_right'},
    {value: 'finger_left', viewValue: 'finger_left'},
    {value: 'finger_right', viewValue: 'finger_right'},
    {value: 'foot_left_dorsal', viewValue: 'foot_left_dorsal'},
    {value: 'foot_left_plantar', viewValue: 'foot_left_plantar'},
    {value: 'foot_right_dorsal', viewValue: 'foot_right_dorsal'},
    {value: 'foot_right_plantar', viewValue: 'foot_right_plantar'},
    {value: 'forearm_left_anterior', viewValue: 'forearm_left_anterior'},
    {value: 'forearm_left_posterior', viewValue: 'forearm_left_posterior'},
    {value: 'forearm_right_anterior', viewValue: 'forearm_right_anterior'},
    {value: 'forearm_right_posterior', viewValue: 'forearm_right_posterior'},
    {value: 'forehead', viewValue: 'forehead'},
    {value: 'hand_left_dorsal', viewValue: 'hand_left_dorsal'},
    {value: 'hand_left_palmar', viewValue: 'hand_left_palmar'},
    {value: 'hand_right_dorsal', viewValue: 'hand_right_dorsal'},
    {value: 'hand_right_palmar', viewValue: 'hand_right_palmar'},
    {value: 'head', viewValue: 'head'},
    {value: 'laterocervical_left', viewValue: 'laterocervical_left'},
    {value: 'laterocervical_right', viewValue: 'laterocervical_right'},
    {value: 'leg_left_anterior', viewValue: 'leg_left_anterior'},
    {value: 'leg_left_posterior', viewValue: 'leg_left_posterior'},
    {value: 'leg_right_anterior', viewValue: 'leg_right_anterior'},
    {value: 'leg_right_posterior', viewValue: 'leg_right_posterior'},
    {value: 'lip', viewValue: 'lip'},
    {value: 'nail_finger_left', viewValue: 'nail_finger_left'},
    {value: 'nail_finger_right', viewValue: 'nail_finger_right'},
    {value: 'nail_toe_left', viewValue: 'nail_toe_left'},
    {value: 'nail_toe_right', viewValue: 'nail_toe_right'},
    {value: 'nose', viewValue: 'nose'},
    {value: 'penis_scrotum', viewValue: 'penis_scrotum'},
    {value: 'scalp', viewValue: 'scalp'},
    {value: 'shoulder_left', viewValue: 'shoulder_left'},
    {value: 'shoulder_right', viewValue: 'shoulder_right'},
    {value: 'thigh_left_anterior', viewValue: 'thigh_left_anterior'},
    {value: 'thigh_left_posterior', viewValue: 'thigh_left_posterior'},
    {value: 'thigh_right_anterior', viewValue: 'thigh_right_anterior'},
    {value: 'thigh_right_posterior', viewValue: 'thigh_right_posterior'},
    {value: 'toe_left', viewValue: 'toe_left'},
    {value: 'toe_right', viewValue: 'toe_right'},
    {value: 'vagina', viewValue: 'vagina'},
    {value: 'vulva', viewValue: 'vulva'},
    {value: 'other', viewValue: 'other'},
  ];
  subtypeHistoOpt: Options[] = [
    {value: 'ssm', viewValue: 'SSM'},
    {value: 'nm', viewValue: 'NM'},
    {value: 'lmm', viewValue: 'LMM'},
    {value: 'alm', viewValue: 'ALM'},
    {value: 'desmoplastic', viewValue: 'Desmoplastic'},
    {value: 'mucosal', viewValue: 'Mucosal'},
    {value: 'uveal', viewValue: 'Uveal'},
    {value: 'other', viewValue: 'Other'},
    {value: 'nos', viewValue: 'NOS'},
  ];

  vitaminFrequenceOpt: Options[] = [
    {value: 'less_year', viewValue: '< 1 year'},
    {value: '1_4_years', viewValue: '1/4 years'},
    {value: '5_9_years', viewValue: '5/9 years'},
    {value: '10_years', viewValue: 'Equal or more than 10 years'},
  ];


  private d: SectionD;

  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);
    this.questionnaireService.getQuestionnaireForUser(this.username, `d/${this.type}`).subscribe( (section: SectionD) => {
      console.log(section);
      if (section) {
        this.d = section;
      } else {
        this.d = new SectionD();
      }
      this.buildForm();
    });
  }

   buildForm() {
     this.form = new FormGroup({
       preExistingPigmentedLesionAtTheSameSiteOfMelanoma: new FormControl(this.d.preExistingPigmentedLesionAtTheSameSiteOfMelanoma,
         [Validators.required]),
       durationPreExistingPigmentedLesionAtTheSameSiteOfMelanoma: new FormControl(this.d.durationPreExistingPigmentedLesionAtTheSameSiteOfMelanoma),
       detectionOfMelanoma: new FormControl(this.d.detectionOfMelanoma),
       selfSkinExam: new FormControl(this.d.selfSkinExam),
       skinExamByPhysician: new FormControl(this.d.skinExamByPhysician),
       presenceOfMPM: new FormControl(this.d.presenceOfMPM),
       dateOfDiagnosis: new FormControl(this.d.dateOfDiagnosis),
       primaryTumorKnown: new FormControl(this.d.primaryTumorKnown, Validators.required),
       site: new FormControl(this.d.site ),
       breslowThinkness: new FormControl(this.d.breslowThinkness),
       otherMainHistopatologicFeatures: new FormControl(this.d.otherMainHistopatologicFeatures),
       subtype: new FormControl(this.d.otherMainHistopatologicFeatures.subtype ),
       mitoticRate: new FormControl(this.d.otherMainHistopatologicFeatures.mitoticRate),
       ulceration: new FormControl(this.d.otherMainHistopatologicFeatures.ulceration),
       tumorGrowthPhase: new FormControl(this.d.otherMainHistopatologicFeatures.tumorGrowthPhase),
       regression: new FormControl(this.d.otherMainHistopatologicFeatures.regression),
       regressionPercentage: new FormControl(this.d.otherMainHistopatologicFeatures.regressionPercentage),
       tumorInfiltratingLymphocytes: new FormControl(this.d.otherMainHistopatologicFeatures.tumorInfiltratingLymphocytes),
       associatedNevus: new FormControl(this.d.otherMainHistopatologicFeatures.associatedNevus),
       associatedNevusType: new FormControl(this.d.otherMainHistopatologicFeatures.associatedNevusType),
       vascularInvasion: new FormControl(this.d.otherMainHistopatologicFeatures.vascularInvasion),
       microsatellitosis: new FormControl(this.d.otherMainHistopatologicFeatures.microsatellitosis),
       pigmentation: new FormControl(this.d.otherMainHistopatologicFeatures.pigmentation),
       solarElastosis: new FormControl(this.d.otherMainHistopatologicFeatures.solarElastosis),
       lateralMarginStatus: new FormControl(this.d.otherMainHistopatologicFeatures.lateralMarginStatus),
       deepMarginStatus: new FormControl(this.d.otherMainHistopatologicFeatures.deepMarginStatus),
       sentinelLymphNodebiopsyDone: new FormControl(this.d.sentinelLymphNodebiopsyDone),
       sentinelLymphNodebiopsyResult: new FormControl(this.d.sentinelLymphNodebiopsyResult),
       ajccStageAtDiagnosis: new FormControl(this.d.ajccStageAtDiagnosis),
       mutationalData: new FormControl(this.d.mutationalData),
       gene: new FormControl(this.d.mutationalData.gene),
       sourceOfData: new FormControl(this.d.mutationalData.sourceOfData),
       siteMutational: new FormControl(this.d.mutationalData.site),
       });
   }

  save() {
    this.d = new SectionD(this.form);

    console.log(this.d);
    this.questionnaireService.insertSection(this.username, `d/${this.type}`, this.d).subscribe( (res) => {
      console.log(res);
    });
  }
}
