import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'http://localhost:8091/usuarios';

  constructor(private http: HttpClient) {}

  buscarUsuarioPorId(id: number): Observable<any> {
    const url = `http://localhost:8091/usuarios/${id}`;
    return this.http.get(url);
  }
  
  atualizarValores(id: number, pontuacao: number, nivel: number) {
    const url = `${this.apiUrl}/${id}`;
    const body = { pontuacao, nivel };

    return this.http.put(url, body);
  }
}
