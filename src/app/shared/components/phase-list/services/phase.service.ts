import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Phase } from '../models/phase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const httpOptions = {
  headers: new HttpHeaders ({
    'Contrent-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PhaseService {

private readonly url = environment.apiUrl + '/phase';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Phase[]>{
    return this.http.get<Phase[]>(this.url)
  }

  getByWorld(world: number) {
    const urlWithWorld = `${this.url}/${world}`;
    return this.http.get<Phase[]>(urlWithWorld);
  }
  
  
}
