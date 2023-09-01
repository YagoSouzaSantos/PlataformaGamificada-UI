import { Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { MusicaService } from 'src/app/shared/services/musica.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private musicaService: MusicaService,
    private router: Router
    ) {}

  ngOnInit(): void {

    this.musicaService.pausarMusica();
  }

  

}
