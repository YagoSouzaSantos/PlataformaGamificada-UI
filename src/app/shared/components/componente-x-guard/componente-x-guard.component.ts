import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-x-guard',
  templateUrl: './componente-x-guard.component.html',
  styleUrls: ['./componente-x-guard.component.css']
})
export class ComponenteXGuard implements OnInit {

  public disableStyle: boolean = false;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.disableStyle = true;
    }, 4000);
  }
  

}
