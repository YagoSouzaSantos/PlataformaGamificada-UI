import { UsuariosService } from './../../../core/template/main/services/usuarios.service';
import { DataService } from './../../../core/template/main/services/data.service';
import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked } from '@angular/core';
import { PhaseService } from './services/phase.service';
import { Phase } from './models/phase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent implements OnInit, AfterViewChecked  {

  @Input() planet: number;
  phases: Phase[];
  images: string[];
  randomImageUrl: string;
  proofImage: string;


  constructor(
    private phaseService: PhaseService,
    private dataService: DataService,
    private usuariosService: UsuariosService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) { }
  

  ngOnInit() {
    this.loadPhases();
  }

  loadPhases() {
    this.phaseService.getByWorld(this.planet).subscribe((data: any) => {
      this.phases = data.content;
      this.randomImageUrl = this.getRandomImageUrl();
      this.cdr.detectChanges();
    });
  }
  

  getRandomImageUrl(): string {
    if (this.planet === 1) {
      this.images = [
        '../../../assets/images/islands/island02.png',
        '../../../assets/images/islands/island03.png',
        '../../../assets/images/islands/island04.png',
        '../../../assets/images/islands/island05.png'
      ];
    } else {
      this.images = [
        '../../../assets/images/icebergs/iceberg01.png',
        '../../../assets/images/icebergs/iceberg02.png',
        '../../../assets/images/icebergs/iceberg03.png',
        '../../../assets/images/icebergs/iceberg04.png'
      ];
    }
  
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
 
  ngAfterViewChecked() {
    this.randomImageUrl = this.getRandomImageUrl();
  }
  
  goToActivities(phaseId: number) {
    this.dataService.increaseFuel(-10);
    this.usuariosService.atualizarValores(
      this.dataService.getId(),
      this.dataService.getPoints(),
      this.dataService.getLevel(),
      this.dataService.getFuel(),
      this.dataService.getLifes(),
    ).subscribe();
    this.router.navigate(['activities', phaseId]);
  }

}
