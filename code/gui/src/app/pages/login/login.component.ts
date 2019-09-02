import { Component, Input, OnInit, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { User } from '../../model/User';
import * as JsPDF from 'jspdf';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  visible: boolean = false;
  role: string;
  @ViewChild('successDialog', {static: false}) successDialog: TemplateRef<any>;
  @Input() error: string | null;
  newUser: User;

  constructor(private authService: AuthenticationService, private router: Router, private dialog: MatDialog){
  }

  submit() {
    this.authService.login(this.form.value.username, this.form.value.password).subscribe( (res) => {
      console.log(this.authService.currentUserValue);
      if (this.authService.currentUserValue.role === 'DOCTOR') {
        this.router.navigate(['profile']);
      } else {
        const extras: NavigationExtras = {
          state: {
            username: this.authService.currentUserValue.username
          }
        };

        this.router.navigate(['questionnaire', this.authService.currentUserValue.username] );
      }
    }, err => {
      console.error('Error:', err);
      if (err.status && err.status === 401) {
        this.error = 'Invalid credentials';
      }
    });
  }

  signup() {
    this.authService.signup(this.role).subscribe( (user: User) => {
      console.log(user);
      this.newUser = user;
      this.form.controls.username.setValue(this.newUser.username);
      this.form.controls.password.setValue(this.newUser.password);


      // Open dialog box with generated information.
      this.dialog.open(this.successDialog);
    });
  }

  showSignup() {
    this.visible = true;
  }

  generatePDF(){
    const doc = new JsPDF();
    doc.text('User credentials', 10, 10);
    doc.text(`USERNAME: ${this.newUser.username}`, 10, 20);
    doc.text(`PASSWORD: ${this.newUser.password}`, 10, 30);
    doc.save(`${this.newUser.username}.pdf`);
  }

}
