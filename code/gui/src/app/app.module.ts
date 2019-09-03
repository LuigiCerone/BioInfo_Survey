import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material.module';
import { AppRoutingModule } from './app.routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { SectionsModule } from './pages/questionnaire/sections.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { RoleGuard } from './guards/role.guard';
import { httpInterceptorProviders } from './interceptors';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
import { QueryComponent } from './pages/query/query.component';
import { QueryBuilderModule } from 'angular2-query-builder';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuestionnaireComponent,
    ProfileComponent,
    QueryComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    SectionsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxJsonViewerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    }),
    QueryBuilderModule,
    FormsModule
  ],
  providers: [
    NoAuthGuard,
    RoleGuard,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
