import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {SectionB3} from '../../../model/SectionB3';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import { NonMelanomaSkinCancer, SectionC2 } from '../../../model/SectionC2';
import { SectionC1 } from '../../../model/SectionC1';

@Component({
  selector: 'app-section-c2',
  templateUrl: './section-c2.component.html',
  styleUrls: ['./section-c2.component.css']
})
export class SectionC2Component implements OnInit {
  form: FormGroup;

  lifetimeSsccOpt: Options[] = [
    {value: 'bowen', viewValue: 'Bowen'},
    {value: 'erythroplasia', viewValue: 'Erythroplasia Querat'},
    {value: 'other', viewValue: 'Other'},
  ];

  private c2: SectionC2;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'c2').subscribe( (section: SectionC2) => {
      console.log(section);
      if (section) {
        this.c2 = section;
      } else {
        this.c2 = new SectionC2();
      }
      this.buildForm();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      diagnosisName: new FormControl(this.c2.medicalDiagnoses.diagnosisName, [Validators.required]),
      ICD10Code: new FormControl(this.c2.medicalDiagnoses.ICD10Code, [Validators.required]),

      treatmentName: new FormControl(this.c2.previousAndConcomitantTreatments.treatmentName, [Validators.required]),
      treatmentStartingTime: new FormControl(this.c2.previousAndConcomitantTreatments.treatmentStartingTime, [Validators.required]),
      treatmentEndingTime: new FormControl(this.c2.previousAndConcomitantTreatments.treatmentEndingTime, [Validators.required]),

      numberOfFullTermPregnancies: new FormControl(this.c2.pregnancyHistory.numberOfFullTermPregnancies, [Validators.required]),
      dateOfBirthOfChildren: new FormControl(this.c2.pregnancyHistory.dateOfBirthOfChildren, [Validators.required]),
      numberOfMiscarriages: new FormControl(this.c2.pregnancyHistory.numberOfMiscarriages, [Validators.required]),
      melanomaOccurDuringPregnancy: new FormControl(this.c2.pregnancyHistory.melanomaOccurDuringPregnancy, [Validators.required]),
      melanomaOccurBeforePregnancy: new FormControl(this.c2.pregnancyHistory.melanomaOccurBeforePregnancy, [Validators.required]),
      howManyYearsBeforePregnancy: new FormControl(this.c2.pregnancyHistory.howManyYearsBeforePregnancy, [Validators.required]),
      melanomaOccurAfterPregnancy: new FormControl(this.c2.pregnancyHistory.melanomaOccurAfterPregnancy, [Validators.required]),
      howManyYearsAfterPregnancy: new FormControl(this.c2.pregnancyHistory.howManyYearsAfterPregnancy, [Validators.required]),
      IVFBeforeDiagnosis: new FormControl(this.c2.pregnancyHistory.IVFBeforeDiagnosis, [Validators.required]),

      numberBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].number, [Validators.required]),
      whenBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].when, [Validators.required]),
      siteBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].site, [Validators.required]),
      dateOfDiagnosisBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].dateOfDiagnosis, [Validators.required]),

      numberScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].number, [Validators.required]),
      whenScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].when, [Validators.required]),
      siteScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].site, [Validators.required]),
      dateOfDiagnosisScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].dateOfDiagnosis, [Validators.required]),

      typeInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].type, [Validators.required]),
      numberInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].number, [Validators.required]),
      whenInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].when, [Validators.required]),
      siteInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].site, [Validators.required]),
      dateOfDiagnosisInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].dateOfDiagnosis, [Validators.required]),

      typeNonCutaneous: new FormControl(this.c2.nonCutaneousNeoplasias.type, [Validators.required]),
      ageOfDiagnosis: new FormControl(this.c2.nonCutaneousNeoplasias.ageOfDiagnosis, [Validators.required]),
      yearOfDiagnoses: new FormControl(this.c2.nonCutaneousNeoplasias.yearOfDiagnoses, [Validators.required]),
    });
  }

  save() {
    this.c2 = new SectionC2(this.form);

    console.log(this.c2);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'c2', this.c2).subscribe( (res) => {
      console.log(res);
    });
  }
}
