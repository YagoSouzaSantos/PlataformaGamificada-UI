import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-home-button',
  templateUrl: './to-home-button.component.html',
  styleUrls: ['./to-home-button.component.css']
})
export class ToHomeButtonComponent {

  constructor(
    private router: Router
  ) { }

  irParaMundos() {
    this.router.navigate(['mundosdeestudo']);
  }
}
