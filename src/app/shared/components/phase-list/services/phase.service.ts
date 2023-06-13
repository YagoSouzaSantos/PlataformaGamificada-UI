import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phase } from '../models/phase';
import { Observable } from 'rxjs';


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

  getByWorld(world: number) {
    const urlWithWorld = `${this.url}/${world}`;
    return this.http.get<Phase[]>(urlWithWorld);
  }
  
  
}
