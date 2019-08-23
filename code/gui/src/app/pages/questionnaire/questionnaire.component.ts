import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';
import { SectionA1 } from '../../model/SectionA1';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  isLinear = false;
  a1: SectionA1;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username).subscribe( (questionnaire) => {
      console.log(questionnaire);
      this.a1 = questionnaire.a1;
      console.log(`sono qui: ${JSON.stringify(this.a1)}`);
    });
  }

}
