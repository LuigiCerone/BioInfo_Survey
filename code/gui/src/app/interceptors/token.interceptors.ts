import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // Get the auth token from the service.
    const authToken = this.authenticationService.getAuthToken();

    if (authToken !== null && authToken !== undefined && authToken !== '') {
      console.log('adding token into header');
      console.log(`added: ${authToken}`);
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      return next.handle(authReq).pipe(
        catchError(err => {
          this.showError(err);
          return EMPTY;
        })
      );
    } else {
      return next.handle(req);
    }

  }

  async showError(err: HttpErrorResponse) {
    const errorMessage = `Status: ${err.status}, Message: ${err.message}`;
    console.error(errorMessage);
  }
}
