import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionA1 } from '../../../model/SectionA1';
import { AuthenticationService } from '../../../services/authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  // The following attribute is used for specifying which subsection is evaluated.
  @Input()
  section: string;

  private username: string;

  complexityOpt: Options[] = [
    {value: 'all', viewValue: 'All questions'},
    {value: 'most', viewValue: 'Most questions'},
    {value: 'half', viewValue: 'Nearly half questions'},
    {value: 'few', viewValue: 'Few questions'},
  ];

  private e: SectionE;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    console.log(`Evaluation for section: ${this.section}`);
    this.username = this.route.snapshot.params.username;
    console.log(this.username);

    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.username, `${this.section}e`).subscribe( (section: SectionE) => {
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
    this.questionnaireService.insertSection(this.username, `${this.section}e`, this.e).subscribe( (res) => {
      console.log(res);
    });
  }

}
