import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REST_API } from '../model/Config';

@Injectable({
  providedIn: 'root'
})
export class QuestionnaireService {

  constructor(private http: HttpClient) { }

  getAllQuestionnaire(): Observable<any> {
    return this.http.get(REST_API.QUESTIONNAIRE);
  }

  getQuestionnaireForUser(username: string, section: string): Observable<any> {
    return this.http.get(`${REST_API.QUESTIONNAIRE_USER}/${username}/${section}`);
  }

  insertSection(username: string, section: string, data: any): Observable<any>{
    return this.http.post(`${REST_API.QUESTIONNAIRE_USER}/${username}/${section}`, data);
  }

  runQuery(username: string, query) {
    return this.http.post(REST_API.QUERY, query);
  }
}
