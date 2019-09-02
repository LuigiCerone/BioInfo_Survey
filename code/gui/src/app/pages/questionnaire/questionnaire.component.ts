import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { SectionA1 } from '../../model/SectionA1';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionD } from '../../model/SectionD';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit{
  form: FormGroup;
  Ds: Array<number>;

  // a1: SectionA1 = new SectionA1();
  //
  // formA1: FormGroup = new FormGroup({
  //   subject: new FormControl(this.a1.subject , Validators.required),
  //   dbCodeNumber: new FormControl(this.a1.dbCodeNumber, [
  //     Validators.required,
  //     Validators.pattern('[0-9]{4}[MC][0-9]{4}')
  //   ]),
  //   dateOfQuestionnaireAdministration: new FormControl(this.a1.dateOfQuestionnaireAdministration, [
  //     Validators.required,
  //     Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
  //   ]),
  //   typeOfMelanoma: new FormControl(this.a1.typeOfMelanoma, Validators.required),
  //   otherSpecification: new FormControl(this.a1.otherSpecification)
  // });
  //
  // formA2: FormGroup;

  constructor(private authenticationService: AuthenticationService,
              private questionnaireService: QuestionnaireService) {}

  ngOnInit(): void {

    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'd').subscribe( (res: number) => {
      console.log(res);
      if (res) {
        this.Ds = this.createSectionD(res);
      } else {
        this.Ds = this.createSectionD(0);
      }
      this.form = new FormGroup({
        number: new FormControl(res, Validators.required)
      });
    });
  }

  save() {
    const n = this.form.value.number;
    this.Ds = this.createSectionD(n);

    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'd', {number: n}).subscribe( (res) => {
      console.log(res);
    });
  }

  createSectionD(n) {
    if (!n) {
    }
    const res = [];
    for (let i = 0; i < n; i++) {
      res.push(i);
    }
    console.log(res);
    return res;
  }
}
