import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Options} from '../section-a1/section-a1.component';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {QuestionnaireService} from '../../../services/questionnaire.service';
import { SectionC3 } from '../../../model/SectionC3';

@Component({
  selector: 'app-section-c3',
  templateUrl: './section-c3.component.html',
  styleUrls: ['./section-c3.component.css']
})
export class SectionC3Component implements OnInit {
  form: FormGroup;

  relativesMelanomaTypeOpt: Options[] = [
    {value: 'cutaneous', viewValue: 'Cutaneous'},
    {value: 'uveal', viewValue: 'Uveal'},
    {value: 'other', viewValue: 'Other'},
    {value: 'not_known', viewValue: 'Don\'t know'},
  ];

  germlineStatusOpt: Options[] = [
    {value: 'not', viewValue: 'Not tested'},
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

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'c3').subscribe( (section: SectionC3) => {
      console.log(section);
      if (section) {
        this.c3 = section;
      } else {
        this.c3 = new SectionC3();
      }
      this.buildForm();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      presenceMelanomaRelatives: new FormControl(this.c3.familyHistoryOfMelanomaList.presence, [Validators.required]),
      specifyOtherPresence: new FormControl(this.c3.familyHistoryOfMelanomaList.other, [Validators.required]),
      relativesMelanomaType: new FormControl(this.c3.familyHistoryOfMelanomaList.type, [Validators.required]),
      relativeSide: new FormControl(this.c3.familyHistoryOfMelanomaList.sideOfAffectedRelative, [Validators.required]),
      relativeDegree: new FormControl(this.c3.familyHistoryOfMelanomaList.degreeOfRelative, [Validators.required]),
      ageAtDiagnosis: new FormControl(this.c3.familyHistoryOfMelanomaList.ageAtDiagnosis, [Validators.required]),
    });
  }

  save() {
    this.c3 = new SectionC3(this.form);

    console.log(this.c3);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'c3', this.c3).subscribe( (res) => {
      console.log(res);
    });
  }
}
