import { Component, OnInit } from '@angular/core';
import { PhaseService } from '../../nivel/services/phase.service';
import { Phase } from '../../nivel/models/Phase';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


const API_URL = environment.apiUrl + "/activity/upload";
@Component({
  selector: 'app-add-material',
  templateUrl: './add-material.component.html',
  styleUrls: ['./add-material.component.css']
})
export class AddMaterialComponent implements OnInit {

  valoresMundos = [1, 2, 3];
  mundos = [
    { descricao: 'Mundo de conhecimentos 01', id: 1 },
    { descricao: 'Mundo de conhecimentos 02', id: 2 },
    { descricao: 'Mundo de conhecimentos 03', id: 3 }
  ];
  
  mundoSelecionado: any;
  

  fases: Phase[];

  faseSelecionada: any;

  arquivo: File;

  constructor(
    private phaseService: PhaseService,
    private http: HttpClient,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.atualizarFases();
  }


  atualizarFases(): void {
    this.phaseService.getFasesPorMundo(this.mundoSelecionado).subscribe((data: any) => {
      console.log(data);
      this.fases = data.content.map((fase: any) => fase);
    });  
  }
  
  
  onFileSelected(event: any) {
    this.arquivo = event.target.files[0];
    console.log('Arquivo selecionado:', this.arquivo);
  }

  enviarFormulario(): void {
    const formData = new FormData();
    formData.append('file', this.arquivo);
    formData.append('phaseId', this.faseSelecionada.toString()); // Converter o ID para string antes de adicionar ao formData
  
    console.log('Arquivo:', this.arquivo);

    this.http.post<any>(API_URL, formData).subscribe(
      (response) => {
        alert('Nova atividade gravada com sucesso!');
        this.router.navigate(['material/lista']);
      },
      (error) => {
        // Erro - lidar com o erro do servidor
        console.error(error);
      }
    );
  }
  
  

}
