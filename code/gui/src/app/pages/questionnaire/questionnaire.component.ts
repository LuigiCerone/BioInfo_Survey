import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.css']
})
export class QuestionnaireComponent implements OnInit {
  isLinear = false;

  constructor(private authenticationService: AuthenticationService,
              private router: Router,
              private questionnaireService: QuestionnaireService) { }

  ngOnInit() {
    // Get current logged in user and retrieve his/her questionnaire.
    this.questionnaireService.getQuestionnaireForUser(this.authenticationService.currentUserValue.username).subscribe( (res) => {
      console.log(res);
    });
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['home']);
  }

}
