import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/template/main/services/data.service';
import { UsuariosService } from 'src/app/core/template/main/services/usuarios.service';
import { WorldsWizardComponent } from '../worlds-wizard/worlds-wizard.component';
import { Answer, Question } from './model/question';
import { QuestionService } from './services/question.service';

@Component({
  selector: 'app-proof',
  templateUrl: './proof.component.html',
  styleUrls: ['./proof.component.css']
})
export class ProofComponent implements OnInit {
  questions: Question[];
  currentQuestionIndex: number = 0;
  selectedAnswer: Answer | undefined;
  correctAnswersCount: number = 0;
  phaseId: number;
  audio: any;
  mostrarCorreto = false;
  mostrarErrado = false;

  constructor(
    private questionService: QuestionService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService,
    private usuariosService: UsuariosService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phaseId = +params['phaseId'];
    });
    this.loadQuestions();

    setTimeout(() => {
      this.openDialog();
    }, 500);

    // this.audio = new Audio('../../../../assets/audio/music_zapsplat_road_to_ankara.mp3');
    // this.audio.play();
  }

  loadQuestions() {
    this.questionService.getQuestions(this.phaseId).subscribe(
      (questions: Question[]) => {
        this.questions = questions;
      },
      (error) => {
        console.error('Failed to load questions:', error);
      }
    );
  }

  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    if (this.selectedAnswer && this.selectedAnswer.correct) {
      this.correctAnswersCount++;

      this.dataService.increasePoints(50);
      this.dataService.increaseScore(100);

      this.mostrarCorreto = true;
      setTimeout(() => {
        this.mostrarCorreto = false;
      }, 5000);

      const audio = new Audio('../../../../assets/audio/win.wav');
      audio.play();
    }
    else {

      this.mostrarErrado = true;
      setTimeout(() => {
        this.mostrarErrado = false;
      }, 5000);

      const audio = new Audio('../../../../assets/audio/wrong.wav');
      audio.play();

    }
    this.selectedAnswer = undefined;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      const totalQuestions = this.questions.length;
      const correctPercentage = (this.correctAnswersCount / totalQuestions) * 100;

      if (correctPercentage >= 90) {
        this.openDialogEndgame(`Parabéns! Você atingiu ${correctPercentage.toFixed(2)}% de perguntas corretas.`);
        this.dataService.increasePoints(200);
      } else if (correctPercentage >= 75 && correctPercentage < 90) {
        this.openDialogEndgame(`Parabéns! Você atingiu ${correctPercentage.toFixed(2)}% de perguntas corretas.`);
        this.dataService.increasePoints(150);
      } else if (correctPercentage >= 60 && correctPercentage < 75) {
        this.openDialogEndgame(`Parabéns! Você atingiu ${correctPercentage.toFixed(2)}% de perguntas corretas.`);
        this.dataService.increasePoints(100);
      } else {
        this.openDialogEndgame(`Pontuação final: ${this.correctAnswersCount} de ${totalQuestions}. Você não atingiu 60% de perguntas corretas.`);
        this.dataService.increaseLifes(-1);
      }

      this.usuariosService.atualizarValores(
        this.dataService.getId(),
        this.dataService.getPoints(),
        this.dataService.getLevel(),
        this.dataService.getFuel(),
        this.dataService.getLifes(),
        this.dataService.getScore()
      ).subscribe();
      
      this.router.navigate(['activities', this.phaseId]);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        parameter: 'proof',
        title: 'A prova de conhecimentos',
        imagePath: '../../../assets/images/worlds-wizard/blocked.png'
      }
    });
  }

  openDialogEndgame(text: any): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        text: text,        
        title: '!!! Fim de jogo !!!',
        imagePath: '../../../assets/images/worlds-wizard/instructions.png'
      }
    });
  }
}
