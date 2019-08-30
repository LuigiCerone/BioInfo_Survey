import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import { FamilyHistory, SectionC3 } from '../../../model/SectionC3';
import { Questionnaire } from '../../../model/Questionnaire';
import { MatDialog, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-section-c3',
  templateUrl: './section-c3.component.html',
  styleUrls: ['./section-c3.component.css']
})
export class SectionC3Component implements OnInit {
  form: FormGroup;
  formMelanoma: FormGroup;

  relativesMelanomaTypeOpt: Options[] = [
    {value: 'cutaneous', viewValue: 'Cutaneous'},
    {value: 'uveal', viewValue: 'Uveal'},
    {value: 'other', viewValue: 'Other'},
    {value: 'not_known', viewValue: 'Don\'t know'},
  ];

  germlineStatusOpt: Options[] = [
    {value: 'not_tested', viewValue: 'Not tested'},
    {value: 'CDKN2A', viewValue: 'CDKN2A'},
    {value: 'CDK4', viewValue: 'CDK4'},
    {value: 'BAP-1', viewValue: 'BAP-1'},
    {value: 'MC1R', viewValue: 'MC1R'},
    {value: 'TERT', viewValue: 'TERT'},
    {value: 'MITF', viewValue: 'MITF'},
    {value: 'POT1', viewValue: 'POT1'},
    {value: 'other', viewValue: 'Other'},
  ];

  private c3: SectionC3;

  displayedColumns: string[] = ['side', 'degree', 'age', 'actions'];
  private melanomaFamily = new MatTableDataSource(new Array<FamilyHistory>());
  @ViewChild('melanomaDialog', {static: false}) melanomaDialog: TemplateRef<any>;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService,
              private dialog: MatDialog) {}

  ngOnInit() {
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'c3').subscribe( (section: SectionC3) => {
      console.log(section);
      if (section) {
        this.c3 = section;
      } else {
        this.c3 = new SectionC3();
      }
      this.buildForm();
      this.buildFormMelanoma();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      presenceMelanoma: new FormControl(this.c3.familyHistoryOfMelanomaList[0].presence, [Validators.required]),

      germlineStatus: new FormControl(this.c3.germlineStatus),

      presenceCancer: new FormControl(this.c3.familyHistoryOfOtherCancer.presence, [Validators.required]),
      typeCancer: new FormControl(this.c3.familyHistoryOfOtherCancer.other, Validators.pattern('[a-zA-Z]*')),
      otherCancer: new FormControl(this.c3.familyHistoryOfOtherCancer.type),
      sideOfAffectedRelativeCancer: new FormControl(this.c3.familyHistoryOfOtherCancer.sideOfAffectedRelative),
      degreeOfRelativeCancer: new FormControl(this.c3.familyHistoryOfOtherCancer.degreeOfRelative),
      ageAtDiagnosisCancer: new FormControl(this.c3.familyHistoryOfOtherCancer.ageAtDiagnosis, Validators.pattern('[0-9]{1,3}'))
    });
  }

  save() {
    this.c3 = new SectionC3(this.form);

    console.log(this.c3);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'c3', this.c3).subscribe( (res) => {
      console.log(res);
    });
  }

  addMelanomaParent() {
    console.log(`la lista prima: ${JSON.stringify(this.c3.familyHistoryOfMelanomaList)}`);
    const newParent: FamilyHistory = new FamilyHistory('M', this.formMelanoma);
    this.c3.familyHistoryOfMelanomaList.push(newParent);

    // Update table data.
    this.melanomaFamily.data = this.c3.familyHistoryOfMelanomaList;

    console.log(`la lista dopo: ${JSON.stringify(this.c3.familyHistoryOfMelanomaList)}`);
    // Clear form inputs.
    this.formMelanoma.reset();
  }

  buildFormMelanoma() {

    // Init table for melanoma.
    if (this.c3 && this.c3.familyHistoryOfMelanomaList) {
      this.melanomaFamily.data = this.c3.familyHistoryOfMelanomaList;
    } else {
      this.melanomaFamily.data = new Array<FamilyHistory>();
    }

    // Init form for adding new melanoma relatives.
    this.formMelanoma = new FormGroup({
      otherMelanoma: new FormControl('', Validators.pattern('[a-zA-Z]*')),
      typeMelanoma: new FormControl('', Validators.required),
      sideOfAffectedRelativeMelanoma: new FormControl('', Validators.required),
      degreeOfRelativeMelanoma: new FormControl('', Validators.required),
      ageAtDiagnosisMelanoma: new FormControl('', [Validators.required, Validators.pattern('[0-9]{1,3}')])
    });
  }

  removeMelanomaParent(event, element) {
    event.stopPropagation();
    const index = this.c3.familyHistoryOfMelanomaList.indexOf(element);
    if (index > -1) {
      this.c3.familyHistoryOfMelanomaList.splice(index, 1);
    }
  }

  openMelanomaModal() {
    this.dialog.open(this.melanomaDialog);
  }
}
