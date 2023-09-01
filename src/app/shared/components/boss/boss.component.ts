import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '../proof/model/question';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/core/template/main/services/data.service';
import { UsuariosService } from 'src/app/core/template/main/services/usuarios.service';
import { QuestionService } from '../proof/services/question.service';
import { WorldsWizardComponent } from '../worlds-wizard/worlds-wizard.component';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.component.html',
  styleUrls: ['./boss.component.css']
})
export class BossComponent implements OnInit {
  questions: Question[];
  currentQuestionIndex: number = 0;
  selectedAnswer: Answer | undefined;
  correctAnswersCount: number = 0;
  planet: number;
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
      this.planet = +params['planet'];
    });
    this.loadAndShuffleQuestions();
  
    setTimeout(() => {
      this.openDialog();
    }, 500);
  }
  
  loadAndShuffleQuestions() {
    this.questionService.getBossQuestions(this.planet).subscribe(
      (questions: Question[]) => {
        this.questions = questions;
        this.shuffleQuestions();
        this.questions = this.questions.slice(0, 15); // Limita a exibição a 15 perguntas
      },
      (error) => {
        console.error('Failed to load questions:', error);
      }
    );
  }
  
  shuffleQuestions() {
    for (let i = this.questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
  }
  
  selectAnswer(answer: Answer) {
    this.selectedAnswer = answer;
  }

  submitAnswer() {
    if (this.selectedAnswer && this.selectedAnswer.correct) {
      this.correctAnswersCount++;

      this.dataService.increasePoints(50);
      this.dataService.increaseScore(150);

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

      const audio = new Audio('../../../../assets/audio/eagle.mp3');
      audio.play();

    }
    this.selectedAnswer = undefined;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      const totalQuestions = this.questions.length;
      const correctPercentage = (this.correctAnswersCount / totalQuestions) * 100;

      if (correctPercentage >= 90) {
        this.openDialogEndgame(`Parabéns! Novo nível desbloqueado!! Você atingiu ${correctPercentage.toFixed(2)}% de perguntas corretas e conquistou esse mundo!!`);
        this.dataService.increasePoints(200);
        this.dataService.increaseLevel(1);
      } else if (correctPercentage >= 75 && correctPercentage < 90) {
        this.openDialogEndgame(`Parabéns! Novo nível desbloqueado!! Você atingiu ${correctPercentage.toFixed(2)}% de perguntas corretas e conquistou esse mundo!!`);
        this.dataService.increasePoints(150);
        this.dataService.increaseLevel(1);
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
      
      this.router.navigate(['mundosdeestudo']);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        parameter: 'boss',
        title: 'A batalha do século!',
        imagePath: '../../../assets/images/worlds-wizard/blocked.png'
      }
    });
  }

  openDialogEndgame(text: any): void {
    const dialogRef = this.dialog.open(WorldsWizardComponent, {
      data: {
        text: text,        
        title: '!!! Fim de jogo !!!',
        imagePath: '../../../assets/images/worlds-wizard/final-fase.png'
      }
    });
  }

}
