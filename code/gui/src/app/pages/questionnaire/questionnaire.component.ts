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
        number: new FormControl('', Validators.required)
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
