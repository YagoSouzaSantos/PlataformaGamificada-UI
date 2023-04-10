import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Nivel } from '../models/Nivel';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contrent-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NivelService {

  private readonly url = 'http://localhost:8091/niveis';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Nivel[]>{
    return this.http.get<Nivel[]>(this.url)
  }

  PostNivel(nivel: Nivel): Observable<any>{
    return this.http.post<Nivel>(this.url,nivel,httpOptions);
  } 
}
