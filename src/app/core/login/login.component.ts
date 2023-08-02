import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { User } from './../user/user';

import jwt_decode from 'jwt-decode';
import { TokenService } from '../Token/token.service';
import { DataService } from '../template/main/services/data.service';
import { UsuariosService } from '../template/main/services/usuarios.service';
import { MusicaService } from 'src/app/shared/services/musica.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  user = {} as User;
  hide = true;
  showFiller = false;

  constructor(
    private musicaService: MusicaService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    private dataService: DataService,
    private usuariosService: UsuariosService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
    this.musicaService.pausarMusica();
  }

  login() {

    this.user.email = this.loginForm.get('email')?.value;
    this.user.senha = this.loginForm.get('senha')?.value;

    this.authService.authenticate(this.user).subscribe(data => {

      const decodedToken = this.decodeToken(this.tokenService.getToken());

      if (decodedToken.jti == 0) {
        this.usuariosService.buscarUsuarioPorId(decodedToken.sub).subscribe(
          (response) => {
            
            this.dataService.setLevel(response.nivel)
            this.dataService.setPoints(response.pontuacao)
            this.dataService.setId(decodedToken.sub)
            this.dataService.setAvatar(response.avatar)
            this.dataService.setUser(response.nome)
            this.dataService.setLifes(response.vidas)
            this.dataService.setFuel(response.combustivel)
            
            this.usuariosService.atualizarAcesso(decodedToken.sub).subscribe();
            

            if (response.avatar == 0) {
              this.router.navigate(['avatarselect'])
            } else {
              this.router.navigate(['mundosdeestudo'])
            }
          });


      } else {
        this.router.navigate(['home'])
      }
    },
      err => {
        console.log(err);
        this.loginForm.reset();
      });
  }

  decodeToken(token: any): any {
    const decoded = jwt_decode(token);
    return decoded;
  }
}