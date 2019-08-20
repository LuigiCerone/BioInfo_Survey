import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SectionA1Component} from './section-a1/section-a1.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path: 'form', component : SectionA1Component},
  {path : '', component : LoginComponent},
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
