import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  @Input() error: string | null;

  constructor(private authService: AuthenticationService, private router: Router){
  }

  submit() {
    console.log('submit');
    this.authService.login(this.form.value.username, this.form.value.password).subscribe( (res) => {
      console.log(this.authService.currentUserValue);
      if (this.authService.currentUserValue.role === 'DOCTOR') {
        this.router.navigate(['profile']);
      } else {
        this.router.navigate(['questionnaire']);
      }
    });
  }


  ngOnInit(): void {
  }
}
