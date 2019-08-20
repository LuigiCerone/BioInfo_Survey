import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SectionA1Component} from './section-a1/section-a1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'form', component : SectionA1Component},
  {path : '', component : LoginComponent},
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
