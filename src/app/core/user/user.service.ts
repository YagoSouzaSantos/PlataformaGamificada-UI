import { TokenService } from './../Token/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { User } from './user';


const jwt_decode = require('jwt-decode');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<User>();
  private userName: string;
  private userType: number;

  constructor(private tokenService: TokenService) { 
    this.tokenService.hasToken() && 
    this.decodeAndNotify();
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();

  }

  getUser(){
    return this.userSubject.asObservable();
  }

  private decodeAndNotify(){
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }

  logout() {
    this.tokenService.removeToken();
   // this.userSubject.next(null);
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

  getUserName(){
    return this.userName;
  }

  getUserType(){
    return this.userType;
  }

}


