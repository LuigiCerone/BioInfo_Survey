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
  formCancer: FormGroup;

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
  displayedColumns1: string[] = ['side', 'degree', 'age', 'actions'];
  private melanomaFamily = new MatTableDataSource(new Array<FamilyHistory>());
  private cancerFamily = new MatTableDataSource(new Array<FamilyHistory>());
  @ViewChild('melanomaDialog', {static: false}) melanomaDialog: TemplateRef<any>;
  @ViewChild('cancerDialog', {static: false}) cancerDialog: TemplateRef<any>;

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
      this.buildFormCancer();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      presenceMelanoma: new FormControl(this.c3.presenceFamilyHistoryOfMelanomaList, [Validators.required]),
      germlineStatus: new FormControl(this.c3.germlineStatus),
      presenceCancer: new FormControl(this.c3.presenceFamilyHistoryOfOtherCancer, [Validators.required]),
    });
  }

  save() {
    this.c3 = new SectionC3(this.form, this.c3.familyHistoryOfMelanomaList, this.c3.familyHistoryOfOtherCancer);

    console.log(this.c3);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'c3', this.c3).subscribe( (res) => {
      console.log(res);
    });
  }

  addMelanomaParent() {
    const newParent: FamilyHistory = new FamilyHistory('M', this.formMelanoma);
    this.c3.familyHistoryOfMelanomaList.push(newParent);

    // Update table data.
    this.melanomaFamily.data = this.c3.familyHistoryOfMelanomaList;

    console.log(this.c3.familyHistoryOfMelanomaList);
    // Clear form inputs.
    this.formMelanoma.reset();
  }

  buildFormMelanoma() {

    // Init table for melanoma.
    if (this.c3 && this.c3.familyHistoryOfMelanomaList) {
      this.melanomaFamily.data = this.c3.familyHistoryOfMelanomaList;
    } else {
      this.c3.familyHistoryOfMelanomaList = new Array<FamilyHistory>();
      this.melanomaFamily.data = this.c3.familyHistoryOfMelanomaList;
    }

    // Init form for adding new melanoma relatives.
    this.formMelanoma = new FormGroup({
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
      // Remove element.
      this.c3.familyHistoryOfMelanomaList.splice(index, 1);
      // Update table content.
      this.melanomaFamily.data = this.c3.familyHistoryOfMelanomaList;
    }
  }

  openMelanomaModal() {
    this.dialog.open(this.melanomaDialog);
  }

  // END MELANOMA PART ========================================================================================================


  addCancerParent() {
    const newParent: FamilyHistory = new FamilyHistory('C', this.formCancer);
    this.c3.familyHistoryOfOtherCancer.push(newParent);

    // Update table data.
    this.cancerFamily.data = this.c3.familyHistoryOfOtherCancer;

    console.log(this.c3.familyHistoryOfOtherCancer);
    // Clear form inputs.
    this.formCancer.reset();
  }

  buildFormCancer() {
    // Init table for melanoma.
    if (this.c3 && this.c3.familyHistoryOfOtherCancer) {
      this.cancerFamily.data = this.c3.familyHistoryOfOtherCancer;
    } else {
      this.c3.familyHistoryOfOtherCancer = new Array<FamilyHistory>();
      this.cancerFamily.data = this.c3.familyHistoryOfOtherCancer;
    }

    // Init form for adding new melanoma relatives.
    this.formCancer = new FormGroup({
      typeCancer: new FormControl('', Validators.required),
      sideOfAffectedRelativeCancer: new FormControl('', Validators.required),
      degreeOfRelativeCancer: new FormControl('', Validators.required),
      ageAtDiagnosisCancer: new FormControl('', Validators.required),
    });
  }

  removeCancerParent(event, element) {
    event.stopPropagation();

    const index = this.c3.familyHistoryOfOtherCancer.indexOf(element);
    if (index > -1) {
      // Remove element.
      this.c3.familyHistoryOfOtherCancer.splice(index, 1);
      // Update table content.
      this.cancerFamily.data = this.c3.familyHistoryOfOtherCancer;
    }
  }

  openCancerModal() {
    this.dialog.open(this.cancerDialog);
  }


}
