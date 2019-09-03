import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor(private auth: AuthenticationService,
              private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use(this.translate.getDefaultLang());
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }
}
