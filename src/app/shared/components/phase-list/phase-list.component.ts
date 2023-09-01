import { UsuariosService } from './../../../core/template/main/services/usuarios.service';
import { DataService } from './../../../core/template/main/services/data.service';
import { Component, OnInit, Input, ChangeDetectorRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { PhaseService } from './services/phase.service';
import { Phase } from './models/phase';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WorldsWizardComponent } from '../worlds-wizard/worlds-wizard.component';

@Component({
  selector: 'app-phase-list',
  templateUrl: './phase-list.component.html',
  styleUrls: ['./phase-list.component.css']
})
export class PhaseListComponent implements OnInit, AfterViewChecked, OnDestroy  {

  @Input() planet: number;
  phases: Phase[];
  images: string[];
  randomImageUrl: string;
  proofImage: string;
  bossImage = '../../../assets/images/bossImage.jpg';


  constructor(
    private phaseService: PhaseService,
    private dataService: DataService,
    private usuariosService: UsuariosService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnDestroy(): void {
    this.phases = [];
  }
  

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
    if(this.dataService.getFuel() > 0) {
      this.dataService.increaseFuel(-10);
      this.usuariosService.atualizarValores(
        this.dataService.getId(),
        this.dataService.getPoints(),
        this.dataService.getLevel(),
        this.dataService.getFuel(),
        this.dataService.getLifes(),
        this.dataService.getScore()
      ).subscribe();
      this.router.navigate(['activities', phaseId]);
    }
    else {
      this.openDialogNoFuel('Opa! Parece que sua nave não tem combustível suficiente! Retorne amanhã!')
    }    
  }

  openDialogNoFuel(text: any): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        text: text,        
        title: '!!! Sem Combustível !!!',
        imagePath: '../../../assets/images/worlds-wizard/instructions.png'
      }
    });
  }

  goToBoss() {
    if(this.dataService.getLifes() < 1){
      this.openDialogBlocked("Sem vidas disponíveis para realizar teste de conhecimento. Retorne amanhã!")
    }
    else {
      this.router.navigate(['/boss', this.planet]);
    }
  }

  openDialogBlocked(text: any): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        text: text,        
        title: '!!! Sem vidas disponíveis !!!',
        imagePath: '../../../assets/images/worlds-wizard/instructions.png'
      }
    });
  }
}
