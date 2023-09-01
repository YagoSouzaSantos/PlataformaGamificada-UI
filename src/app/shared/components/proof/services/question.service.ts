import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = environment.apiUrl + '/phase';
  private apiBoss = environment.apiUrl + '/planet';

  constructor(private http: HttpClient) {}

  getQuestions(phaseId: number): Observable<Question[]> {
    const url = `${this.apiUrl}/${phaseId}/questions`;
    return this.http.get<Question[]>(url);
  }

  getBossQuestions(planet: number): Observable<Question[]> {
    const url = `${this.apiBoss}/${planet}/questions`;
    return this.http.get<Question[]>(url);
  }
}