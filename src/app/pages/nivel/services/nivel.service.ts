import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  private readonly url = 'https://localhost:44360/api/nivels';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Nivel[]>{
    return this.http.get<Nivel[]>(this.url)
  }
}
