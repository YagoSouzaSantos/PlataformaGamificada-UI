import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/pages/nivel/models/Phase';
import { PhaseService } from 'src/app/pages/nivel/services/phase.service';


@Component({
  selector: 'app-avaliacao-cadastro',
  templateUrl: './avaliacao-cadastro.component.html',
  styleUrls: ['./avaliacao-cadastro.component.css']
})
export class AvaliacaoCadastroComponent implements OnInit {
  valoresMundos = [1, 2, 3];
  mundos = [
    { descricao: 'Mundo de conhecimentos 01', id: 1 },
    { descricao: 'Mundo de conhecimentos 02', id: 2 },
    { descricao: 'Mundo de conhecimentos 03', id: 3 }
  ];

  formData = {
    text: '',
    answers: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: true },
      { text: '', correct: false }
    ]
  };

  mundoSelecionado: any;
  fases: Phase[];
  faseSelecionada: any;

  constructor(
    private http: HttpClient,
    private phaseService: PhaseService
  ) { }


  ngOnInit(): void {

  }

  atualizarFases(): void {
    this.phaseService.getFasesPorMundo(this.mundoSelecionado).subscribe((data: any) => {
      console.log(data);
      this.fases = data.content.map((fase: any) => fase);
    });
  }

  submitForm() {

    const url = `http://localhost:8091/phase/${this.faseSelecionada}/questions`;

    this.http.post(url, this.formData).subscribe(
      (response) => {
        console.log('Cadastro salvo com sucesso!', response);
        alert('Nova questão gravada com sucesso!');
        this.resetForm();
      },
      (error) => {
        console.error('Erro ao salvar o cadastro:', error);
      }
    );
  }

  resetForm() {
    this.formData = {
      text: '',
      answers: [
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: true },
        { text: '', correct: false }
      ]
    };
  }
}
