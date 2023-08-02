import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/template/main/services/usuarios.service';
import { WorldsWizardComponent } from '../worlds-wizard/worlds-wizard.component';
import { DataService } from './../../../core/template/main/services/data.service';
import { ActivityService } from './services/activity.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  phaseId: any;
  activities: any[];
  images: string[];
  randomImageUrl: string;
  bossImage = '../../../assets/images/livro.jpg';
  
  constructor(
    private route: ActivatedRoute,
    private activityService: ActivityService,
    private cdr: ChangeDetectorRef,
    private dialog: MatDialog,
    private dataService: DataService,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.phaseId = Number(this.route.snapshot.paramMap.get('phaseId'));
    this.getActivities(this.phaseId);

    // const audio = new Audio('../../../../assets/audio/snow.mp3');

    const todosOsAudios = document.querySelectorAll('audio');
    todosOsAudios.forEach((audioExistente: HTMLAudioElement) => {
      audioExistente.pause();
    });

    // audio.play();

    this.randomImageUrl = this.getRandomImageUrl();
    this.cdr.detectChanges();
  }

  getActivities(phaseId: number) {
    this.activityService.getByPhase(phaseId).subscribe(
      (response: any) => {
        this.activities = response.content;
      },
      (error: any) => {
      }
    );
  }

  getRandomImageUrl(): string {
    this.images = [
      '../../../assets/images/study/study01.png',
      '../../../assets/images/study/study02.png',
      '../../../assets/images/study/study03.png'
    ];
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[2];
  }

  ngAfterViewChecked() {
    this.randomImageUrl = this.getRandomImageUrl();
  }

  download(activity : any) {
    this.openDialog();
    this.dataService.increasePoints(20);
    this.usuariosService.atualizarValores(
      this.dataService.getId(),
      this.dataService.getPoints(),
      this.dataService.getLevel(),
      this.dataService.getFuel(),
      this.dataService.getLifes(),
    ).subscribe(
      response => {
        this.downloadFile(activity.title)
        
      },
      error => {
        console.error('Erro ao atualizar usuário:', error);
      }
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        parameter: 'conquest',
        title: 'Conquista Desbloqueada',
        imagePath: '../../../assets/images/worlds-wizard/conquista.jpg'
      }
    });

    const audio = new Audio('../../../../assets/audio/completed.wav');
    audio.play();
  }

  downloadFile(filename : any) {
    
    this.activityService.downloadFile(filename).subscribe(
      (response) => {
        this.activityService.saveFile(response, filename);
      },
      (error) => {
        console.error('Erro ao baixar o arquivo:', error);
      }
    );
  }

  goToProof() {
    if(this.dataService.getLifes() == 0){
      this.openDialogBlocked("Sem vidas disponíveis para realizar teste de conhecimento. Retorne amanhã!")
    }
    else {
      this.router.navigate(['/proof', this.phaseId]);
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