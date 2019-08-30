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
      diagnosisName: new FormControl(this.c2.medicalDiagnoses.diagnosisName,
        [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      icd10Code: new FormControl(this.c2.medicalDiagnoses.icd10Code, [Validators.required]),

      treatmentName: new FormControl(this.c2.previousAndConcomitantTreatments.treatmentName,
        [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      treatmentStartingTime: new FormControl(this.c2.previousAndConcomitantTreatments.treatmentStartingTime,
        [Validators.required, Validators.pattern('[0-9]{4}')]),
      treatmentEndingTime: new FormControl(this.c2.previousAndConcomitantTreatments.treatmentEndingTime,
        [Validators.required, Validators.pattern('[0-9]{4}')]),

      numberOfFullTermPregnancies: new FormControl(this.c2.pregnancyHistory.numberOfFullTermPregnancies,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      dateOfBirthOfChildren: new FormControl(this.c2.pregnancyHistory.dateOfBirthOfChildren,
        [Validators.required, Validators.pattern('[0-9]{2}/[A-Z][a-z]{3}/[0-9]{4}')]),
      numberOfMiscarriages: new FormControl(this.c2.pregnancyHistory.numberOfMiscarriages,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      melanomaOccurDuringPregnancy: new FormControl(this.c2.pregnancyHistory.melanomaOccurDuringPregnancy, [Validators.required]),
      melanomaOccurBeforePregnancy: new FormControl(this.c2.pregnancyHistory.melanomaOccurBeforePregnancy, [Validators.required]),
      howManyYearsBeforePregnancy: new FormControl(this.c2.pregnancyHistory.howManyYearsBeforePregnancy),
      melanomaOccurAfterPregnancy: new FormControl(this.c2.pregnancyHistory.melanomaOccurAfterPregnancy, [Validators.required]),
      howManyYearsAfterPregnancy: new FormControl(this.c2.pregnancyHistory.howManyYearsAfterPregnancy),
      ivfbeforeDiagnosis: new FormControl(this.c2.pregnancyHistory.ivfbeforeDiagnosis, [Validators.required]),

      numberBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].number,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      whenBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].when),
      siteBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].site,
        Validators.pattern('[a-zA-Z]*')),
      dateOfDiagnosisBcc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_BCC].dateOfDiagnosis,
        Validators.pattern('[0-9]{2}/[A-Z][a-z]{3}/[0-9]{4}')),

      numberScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].number,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      whenScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].when),
      siteScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].site,
        Validators.pattern('[a-zA-Z]*')),
      dateOfDiagnosisScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].dateOfDiagnosis,
        Validators.pattern('[0-9]{2}/[A-Z][a-z]{3}/[0-9]{4}')),

      numberInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].number,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      typeInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].type),
      whenInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].when),
      siteInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].site,
        Validators.pattern('[a-zA-Z]*')),
      dateOfDiagnosisInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].dateOfDiagnosis,
        Validators.pattern('[0-9]{2}/[A-Z][a-z]{3}/[0-9]{4}')),

      typeNonCutaneous: new FormControl(this.c2.nonCutaneousNeoplasias.type),
      ageOfDiagnosis: new FormControl(this.c2.nonCutaneousNeoplasias.ageOfDiagnosis, Validators.pattern('[0-9]{1,3}')),
      yearOfDiagnoses: new FormControl(this.c2.nonCutaneousNeoplasias.yearOfDiagnoses, Validators.pattern('[0-9]{4}')),
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
