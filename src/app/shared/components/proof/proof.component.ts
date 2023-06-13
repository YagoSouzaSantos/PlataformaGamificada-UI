import { Component, OnInit } from '@angular/core';
import { Answer, Question } from './model/question';
import { QuestionService } from './services/question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { WorldsWizardComponent } from '../worlds-wizard/worlds-wizard.component';
import { DataService } from 'src/app/core/template/main/services/data.service';

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

  constructor(
    private questionService: QuestionService,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.phaseId = +params['phaseId'];
    });
    this.loadQuestions();

    setTimeout(() => {
      this.openDialog();
    }, 500);

    this.audio = new Audio('../../../../assets/audio/music_zapsplat_road_to_ankara.mp3');

    this.audio.play();
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

    }
    this.selectedAnswer = undefined;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex === this.questions.length) {
      alert(`Pontuação final: ${this.correctAnswersCount} de ${this.questions.length}`);
      this.audio.pause();
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
}
