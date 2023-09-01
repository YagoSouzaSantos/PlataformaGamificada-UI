import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = environment.apiUrl + '/usuarios';

  constructor(private http: HttpClient) {}

  buscarUsuarioPorId(id: number): Observable<any> {
    const url = environment.apiUrl + `/usuarios/${id}`;
    return this.http.get(url);
  }
  
  atualizarAcesso(id: number): Observable<any>  {
    const url = `${this.apiUrl}/acesso/${id}`;
    return this.http.put(url, null);
  }
  
  atualizarValores(id: number, pontuacao: number, nivel: number, combustivel: number, vidas: number, score: number) {
    const url = `${this.apiUrl}/${id}`;
    const body = { pontuacao, nivel, combustivel, vidas, score };

    return this.http.put(url, body);
  }
}
