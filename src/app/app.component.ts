import { Component } from '@angular/core';
import { MusicaService } from './shared/services/musica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private musicaService: MusicaService) {
    this.musicaService.reproduzirMusica();
  }

  ngOnDestroy() {
    this.musicaService.pausarMusica();
  }
}
