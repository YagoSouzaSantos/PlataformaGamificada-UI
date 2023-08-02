import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WorldsWizardComponent } from 'src/app/shared/components/worlds-wizard/worlds-wizard.component';
import { MusicaService } from 'src/app/shared/services/musica.service';

@Component({
  selector: 'app-mundosDeEstudo',
  templateUrl: './mundosDeEstudo.component.html',
  styleUrls: ['./mundosDeEstudo.component.scss']
})
export class MundosDeEstudoComponent implements OnInit {


  planets = [
    {
      id: 1, url: '../../../assets/images/planets/planet_01.png',
      title: 'Conhecimentos Basilares e Primordiais',
      background: '../../../../../assets/images/backgrounds/forest.jpg'
    },
    {
      id: 2,
      url: '../../../assets/images/planets/planet_02.png',
      title: 'Conhecimentos Intermediários e Necessários',
      background: '../../../../../assets/images/backgrounds/iceberg.jpg'
    },
    { id: 3, url: '../../../assets/images/planets/planet_03.png', title: 'Conhecimentos Avançados e Impulsionadores' },
  ];

  constructor(
    private musicaService: MusicaService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.openDialog();
    }, 500);

    this.musicaService.reproduzirMusica();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        parameter: 'purpose',
        title: 'Descrição e objetivo do jogo',
        imagePath: '../../../assets/images/worlds-wizard/instructions.png'
      }
    });
  }

  phaseBlocked(): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        parameter: 'phaseblocked',
        title: 'Nível insuficiente',
        imagePath: '../../../assets/images/worlds-wizard/blocked.png'
      }
    });
  }

  onPlanetClick(planet: any) {
    if (planet.id == 3) {
      this.phaseBlocked();
    }
    else {
      this.router.navigate(['/earth'], { queryParams: { planet: JSON.stringify(planet) } });
    }
  }
}
