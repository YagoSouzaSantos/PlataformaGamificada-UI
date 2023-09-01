import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { TokenService } from '../Token/token.service';
import { User } from '../user/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = '/auth';

  API_URL = environment.apiUrl + this.endpoint;

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  authenticate(user: User) {

    return this.http
      .post(
        this.API_URL, JSON.stringify(user),
        {
          headers: this.headers,
          observe: "response"
        }
      )
      .pipe(tap(res => {
        const authToken = JSON.stringify(res.body, ['token']).substring(10, 177);
        this.tokenService.setToken(authToken);
      }))
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //client
      errorMessage = error.error.message;
    } else {
      //serv
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

  decodeToken(token: any): any {
    const decoded = jwt_decode(token);
    return decoded;
  }
}

