import { Phase } from './../models/Phase';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contrent-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

  private readonly url = 'http://localhost:8091/phase';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Phase[]>{
    return this.http.get<Phase[]>(this.url)
  }

  enviarFormulario(formData: any) {
    return this.http.post(this.url, formData);
  }

  obterFasesCadastradas(): Observable<any[]> {
    return this.http.get<any>(this.url).pipe(
      map(response => {
        if (response && response.content) {
          return response.content as any[];
        }
        return [];
      })
    );
  }

  getFasesPorMundo(world: number): Observable<any[]> {
    const urlWithWorld = `${this.url}/${world}`;
    return this.http.get<Phase[]>(urlWithWorld);
  }
}
  
