import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SectionA1 } from '../../../model/SectionA1';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../../services/questionnaire.service';

export interface Options {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-section-a1',
  templateUrl: './section-a1.component.html',
  styleUrls: ['./section-a1.component.css']
})

export class SectionA1Component implements OnInit {
  public form: FormGroup;

  subjectOpt: Options[] = [
    {value: 'case', viewValue: 'Case'},
    {value: 'control', viewValue: 'Control'},
  ];

  melanomaOpt: Options[] = [
    {value: 'sporadic', viewValue: 'Sporadic'},
    {value: 'familial', viewValue: 'Familial'},
    {value: 'dont_know', viewValue: 'Don\'t know'},
    {value: 'other', viewValue: 'Other'},
  ];

  private a1: SectionA1;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    console.log(`I've received: ${JSON.stringify(this.a1)}`);
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username, 'a1').subscribe( (section: SectionA1) => {
      console.log(section);
      if (section) {
        this.a1 = section;
      } else {
        this.a1 = new SectionA1();
      }
      this.buildForm();
    });
  }

  buildForm() {
    this.form = new FormGroup({
      subject: new FormControl(this.a1.subject , Validators.required),
      database: new FormControl(this.a1.dbCodeNumber, [
        Validators.required,
        Validators.pattern('[0-9]{4}[MC][0-9]{4}')
      ]),
      date: new FormControl(this.a1.dateOfQuestionnaireAdministration, [
        Validators.required,
        Validators.pattern('[0-9]{2}[/][A-Z]{1}[a-z]{2}[/][0-9]{4}')
      ]),
      typeMelanoma: new FormControl(this.a1.typeOfMelanoma, Validators.required),
      otherSpecification: new FormControl(this.a1.otherSpecification)
    });
  }

  /* This method is used to select ion-select item according to model status. */
  subjectSelected(o1: string, o2: string) {
    return o1 && o2 ? o1.toLowerCase() === o2.toLowerCase() : o1 === o2;
  }

  save() {
    console.log(this.form);

    // TODO
    // this.questionnaireService.insertSection(this.authenticationService.currentUserValue.username, 'a1', this.form).subscribe( (res) => {
    //   console.log(res);
    // });
  }

}
