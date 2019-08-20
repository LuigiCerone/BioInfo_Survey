import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';


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

  constructor(private authService: AuthenticationService){
  }

  submit() {
    console.log('submit');
    this.authService.login(this.form.value.username, this.form.value.password).subscribe( (res) => {
      console.log(`res: ${res}`);
    });
  }


  ngOnInit(): void {
  }
}
