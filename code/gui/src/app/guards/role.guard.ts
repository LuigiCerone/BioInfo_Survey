import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import decode from 'jwt-decode';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(public auth: AuthenticationService, public router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
    const user: User = JSON.parse(localStorage.getItem('currentUser'));
    const tokenPayload = decode(user.accessToken);

    console.log(`sono qui con ${tokenPayload.role}`);

    if (
      !this.auth.currentUserValue || tokenPayload.role[0].authority !== expectedRole
    ) {
      this.router.navigate(['login']);
      console.log('bene');
      return false;
    }
    return true;
  }
}
