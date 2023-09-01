import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private readonly url = environment.apiUrl + '/activity';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url);
  }

  getByPhase(phaseId: number): Observable<Activity[]> {
    const phaseUrl = `${this.url}/phase/${phaseId}`;
    return this.http.get<Activity[]>(phaseUrl);
  }

  private apiUrl = environment.apiUrl + '/activity/download/';

  downloadFile(filename: string): Observable<HttpResponse<ArrayBuffer>> {
    const url = `${this.apiUrl}${filename}`;

    return this.http.get(url, {
      responseType: 'arraybuffer',
      observe: 'response',
    });
  }

  saveFile(response: HttpResponse<ArrayBuffer>, filename: string): void {
    const data = response.body;

    if (data) {
      const blob = new Blob([data], { type: 'application/octet-stream' });

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      window.URL.revokeObjectURL(url);
    }
  }
}


