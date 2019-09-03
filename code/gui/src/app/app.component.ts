import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedLanguage = localStorage.getItem('language') || 'en';

  constructor(private auth: AuthenticationService,
              private translateService: TranslateService) {

    const language = this.getActualLanguage();
    // console.log(language);
    this.translateService.setDefaultLang(language);
    this.translateService.use(language);
  }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
  }

  getActualLanguage(): string {
    let language: string;
    try {
      language = localStorage.getItem('language');
      if (!language) {
        language = 'en';
      }
    } catch (error) {
      console.error(error);
    }
    return language;
  }

  onChange(selection: string) {
    this.selectedLanguage = selection;
    console.log(this.selectedLanguage);
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);

    localStorage.setItem('language', this.selectedLanguage);
  }
}
