import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_API } from '../model/Config';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public currentUserSubject$: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject$ = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject$.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject$.value;
  }

  login(username: string, password: string) {
    return this.http.post<any>(REST_API.AUTH, { username, password })
      .pipe(map(result => {
        // login successful if there's a jwt token in the response
        if (result && result.accessToken) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes

          const user: User = new User(result);
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject$.next(user);
          return user;
        }
        return null;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject$.next(null);
  }

  getAuthToken(): string {
    if (localStorage.getItem('currentUser')){
      const user: User = JSON.parse(localStorage.getItem('currentUser'));
      return user.accessToken;
    } else return null;
  }
}
