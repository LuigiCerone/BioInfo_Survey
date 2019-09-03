import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NoAuthGuard } from './guards/no-auth.guard';
import { RoleGuard } from './guards/role.guard';
import { QueryComponent } from './pages/query/query.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: 'questionnaire/:username',
    component : QuestionnaireComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile',
    component : ProfileComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_DOCTOR'
    }
  },
  {
    path: 'query',
    component : QueryComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'ROLE_DOCTOR'
    }
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
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
