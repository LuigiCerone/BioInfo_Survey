import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {SectionB3} from '../../../model/SectionB3';
import {AuthenticationService} from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import { MedicalDiagnosis, NonMelanomaSkinCancer, PregnancyHistory, SectionC2, Treatment } from '../../../model/SectionC2';
import { SectionC1 } from '../../../model/SectionC1';
import { FamilyHistory } from '../../../model/SectionC3';
import { MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-section-c2',
  templateUrl: './section-c2.component.html',
  styleUrls: ['./section-c2.component.css']
})
export class SectionC2Component implements OnInit {
  form: FormGroup;
  formDiagnosis: FormGroup;
  formTreatments: FormGroup;

  lifetimeSsccOpt: Options[] = [
    {value: 'bowen', viewValue: 'Bowen'},
    {value: 'erythroplasia', viewValue: 'Erythroplasia Querat'},
    {value: 'other', viewValue: 'Other'},
  ];

  private c2: SectionC2;

  private medicalDiagnosisTable = new MatTableDataSource(new Array<MedicalDiagnosis>());
  displayedColumns: string[] = ['name', 'code', 'actions'];
  @ViewChild('medicalDiagnosisDialog', {static: false}) medicalDiagnosisDialog: TemplateRef<any>;

  private treatmentsTable = new MatTableDataSource(new Array<Treatment>());
  displayedColumnsTreatments: string[] = ['name', 'start', 'end', 'actions'];
  @ViewChild('treatmentsDialog', {static: false}) treatmentsDialog: TemplateRef<any>;

  private username: string;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.username = this.route.snapshot.params.username;
    console.log(this.username);

    this.questionnaireService.getQuestionnaireForUser(this.username, 'c2').subscribe( (section: SectionC2) => {
      console.log(section);
      if (section) {
        this.c2 = section;
      } else {
        this.c2 = new SectionC2();
      }
      this.buildForm();
      this.buildFormDiagnosis();
      this.buildFormTreatments();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      numberOfFullTermPregnancies: new FormControl(this.c2.pregnancyHistory.numberOfFullTermPregnancies,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      dateOfBirthOfChildren: new FormControl(this.c2.pregnancyHistory.dateOfBirthOfChildren,
        [Validators.required, Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')]),
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
        Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')),

      numberScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].number,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      whenScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].when),
      siteScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].site,
        Validators.pattern('[a-zA-Z]*')),
      dateOfDiagnosisScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_SCC].dateOfDiagnosis,
        Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')),

      numberInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].number,
        [Validators.required, Validators.pattern('[0-9]{1,2}')]),
      typeInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].type),
      whenInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].when),
      siteInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].site,
        Validators.pattern('[a-zA-Z]*')),
      dateOfDiagnosisInScc: new FormControl(this.c2.lifetimeHistoryOfNonMelanomaSkinCancer[NonMelanomaSkinCancer.KEY_IN_SITU_SCC].dateOfDiagnosis,
        Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')),

      typeNonCutaneous: new FormControl(this.c2.nonCutaneousNeoplasias.type),
      ageOfDiagnosis: new FormControl(this.c2.nonCutaneousNeoplasias.ageOfDiagnosis, Validators.pattern('[0-9]{1,3}')),
      yearOfDiagnoses: new FormControl(this.c2.nonCutaneousNeoplasias.yearOfDiagnoses, Validators.pattern('[0-9]{4}')),
    });
  }

  save() {
    this.c2 = new SectionC2(this.form, this.c2.medicalDiagnoses, this.c2.previousAndConcomitantTreatments);

    console.log(this.c2);
    this.questionnaireService.insertSection(this.username, 'c2', this.c2).subscribe( (res) => {
      console.log(res);
    });
  }

  buildFormDiagnosis() {

    // Init table for melanoma.
    if (this.c2 && this.c2.medicalDiagnoses) {
      this.medicalDiagnosisTable.data = this.c2.medicalDiagnoses;
    } else {
      this.c2.medicalDiagnoses = new Array<MedicalDiagnosis>();
      this.medicalDiagnosisTable.data = this.c2.medicalDiagnoses;
    }

    this.formDiagnosis = new FormGroup({
      diagnosisName: new FormControl('', [ Validators.required, Validators.pattern('[a-zA-Z]*') ]),
      icd10Code: new FormControl('', [ Validators.required ])
    });
  }

  removeMedicalDiagnosis(element) {
    const index = this.c2.medicalDiagnoses.indexOf(element);
    if (index > -1) {
      // Remove element.
      this.c2.medicalDiagnoses.splice(index, 1);
      // Update table content.
      this.medicalDiagnosisTable.data = this.c2.medicalDiagnoses;
    }
  }

  openMedicalDiagnosisModal() {
    this.dialog.open(this.medicalDiagnosisDialog);
  }

  addMedicalDiagnosis() {
    const newDiagnosis: MedicalDiagnosis = new MedicalDiagnosis(this.formDiagnosis);
    this.c2.medicalDiagnoses.push(newDiagnosis);

    // Update table data.
    this.medicalDiagnosisTable.data = this.c2.medicalDiagnoses;

    console.log(this.c2.medicalDiagnoses);
    // Clear form inputs.
    this.formDiagnosis.reset();
  }

  // Treatments ==============================================================
  buildFormTreatments() {

    // Init table for melanoma.
    if (this.c2 && this.c2.previousAndConcomitantTreatments) {
      this.treatmentsTable.data = this.c2.previousAndConcomitantTreatments;
    } else {
      this.c2.previousAndConcomitantTreatments = new Array<Treatment>();
      this.treatmentsTable.data = this.c2.previousAndConcomitantTreatments;
    }

    this.formTreatments = new FormGroup({
      treatmentName: new FormControl('',
        [Validators.required, Validators.pattern('[a-zA-Z]*')]),
      treatmentStartingTime: new FormControl('',
        [Validators.required, Validators.pattern('[0-9]{4}')]),
      treatmentEndingTime: new FormControl('',
        [Validators.required, Validators.pattern('[0-9]{4}')]),
    });
  }

  removeTreatment(element) {
    const index = this.c2.previousAndConcomitantTreatments.indexOf(element);
    if (index > -1) {
      // Remove element.
      this.c2.previousAndConcomitantTreatments.splice(index, 1);
      // Update table content.
      this.treatmentsTable.data = this.c2.previousAndConcomitantTreatments;
    }
  }

  openTreatmentModal() {
    this.dialog.open(this.treatmentsDialog);
  }

  addTreatment() {
    const newTreatment: Treatment = new Treatment(this.formTreatments);
    this.c2.previousAndConcomitantTreatments.push(newTreatment);

    // Update table data.
    this.treatmentsTable.data = this.c2.previousAndConcomitantTreatments;

    console.log(this.c2.previousAndConcomitantTreatments);
    // Clear form inputs.
    this.formTreatments.reset();
  }
}
