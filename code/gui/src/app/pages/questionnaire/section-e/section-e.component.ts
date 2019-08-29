import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionA1 } from '../../../model/SectionA1';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';
import { SectionE } from '../../../model/SectionE';

export interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-section-e',
  templateUrl: './section-e.component.html',
  styleUrls: ['./section-e.component.css']
})

export class SectionEComponent implements OnInit {
  private form: FormGroup;

  complexityOpt: Options[] = [
    {value: 'all', viewValue: 'All questions'},
    {value: 'most', viewValue: 'Most questions'},
    {value: 'half', viewValue: 'Nearly half questions'},
    {value: 'few', viewValue: 'Few questions'},
  ];

  private e: SectionE;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'be').subscribe( (section: SectionE) => {
      console.log(section);
      if (section) {
        this.e = section;
      } else {
        this.e = new SectionE();
      }
      this.buildForm();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      complexityOfTheQuestionnaire: new FormControl(this.e.complexityOfTheQuestionnaire , Validators.required),
      difficultQuestions: new FormControl(this.e.difficultQuestions)
    });
  }


  save() {
    this.e = new SectionE(this.form);

    console.log(this.e);
    this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'be', this.e).subscribe( (res) => {
      console.log(res);
    });
  }

}
