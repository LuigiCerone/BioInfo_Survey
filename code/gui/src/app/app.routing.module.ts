import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {SectionA1Component} from './pages/questionnaire/section-a1/section-a1.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'questionnaire', component : QuestionnaireComponent },
  { path : 'home', component : HomeComponent },
  { path : '', component : HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})

export class AppRoutingModule { }
