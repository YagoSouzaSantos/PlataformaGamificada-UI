import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private apiUrl = 'http://localhost:8091/phase';

  constructor(private http: HttpClient) {}

  getQuestions(phaseId: number): Observable<Question[]> {
    const url = `${this.apiUrl}/${phaseId}/questions`;
    return this.http.get<Question[]>(url);
  }
}