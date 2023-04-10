import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from './../auth/auth.service';
import { User } from './../user/user';

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
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['yagossantos32@gmail.com', Validators.required],
      senha: ['123456', Validators.required]
    });

  }

  login() {

    this.user.email = this.loginForm.get('email')?.value;
    this.user.senha = this.loginForm.get('senha')?.value;


    this.authService.authenticate(this.user).subscribe(data => {
        this.router.navigate(['mundosdeestudo'])
    },
      err => {
        console.log(err);
        this.loginForm.reset();
      });
  }
}