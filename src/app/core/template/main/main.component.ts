import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  public showComponent: boolean = true;
  
  constructor(
    public dataService: DataService,
    public router: Router,
    private route: ActivatedRoute) {}

    ngOnInit() {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          // Verifique se a rota atual é a rota específica na qual você deseja ocultar o componente
          if (this.router.url === '/') {
            this.showComponent = false; // Oculte o componente
          } else {
            this.showComponent = true; // Exiba o componente
          }
        }
      });
    }
  
  
}