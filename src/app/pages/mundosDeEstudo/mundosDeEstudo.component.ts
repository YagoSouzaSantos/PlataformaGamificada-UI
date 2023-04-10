import { TokenService } from './../../core/Token/token.service';
import { UserService } from './../../core/user/user.service';
import { User } from './../../core/user/user';
import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-mundosDeEstudo',
  templateUrl: './mundosDeEstudo.component.html',
  styleUrls: ['./mundosDeEstudo.component.scss']
})
export class MundosDeEstudoComponent implements OnInit {

  private usuario: User;

  constructor(private tokenService: TokenService) { }

  ngOnInit() {
    
    const token = this.tokenService.getToken();
    const payload : any = jwt_decode(token ?? '');
    const user = payload.sub;
    console.log(user); 
  }

}


