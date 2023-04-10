import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

const httpOptions = {
  headers: new HttpHeaders ({
    'Contrent-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private readonly url = 'http://localhost:8091/usuarios';

  constructor(private http: HttpClient) { }

  GetAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
  }

  PostUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario, httpOptions);
  }

}
