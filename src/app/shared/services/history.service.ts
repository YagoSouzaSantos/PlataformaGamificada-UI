import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private apiUrl = environment.apiUrl + '/historico';

  constructor(private http: HttpClient) { }

  cadastrarHistory(historyForm: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, historyForm);
  }

}