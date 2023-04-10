import { UserService } from './../user/user.service';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, tap } from 'rxjs/operators';
import { TokenService } from '../Token/token.service';
import { User } from '../user/user';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL = 'http://localhost:8091/auth';

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
        console.log(`User ${user.email} authenticated with token ${authToken}`);
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

}

