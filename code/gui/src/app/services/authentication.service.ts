import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { REST_API } from '../model/endpoints';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(REST_API.AUTH, {username, password});
  }
}
