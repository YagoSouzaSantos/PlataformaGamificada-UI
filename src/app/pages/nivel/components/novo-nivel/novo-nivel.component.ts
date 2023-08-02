import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { PhaseService } from '../../services/phase.service';

@Component({
  selector: 'app-novo-nivel',
  templateUrl: './novo-nivel.component.html',
  styleUrls: ['./novo-nivel.component.css']
})
export class NovoNivelComponent {
 
  formData = {
    title: '',
    world: ''
  };

  worldOptions = [
    { value: '1', label: 'Mundo de conhecimento 1' },
    { value: '2', label: 'Mundo de conhecimento 2' },
    { value: '3', label: 'Mundo de conhecimento 3' }
  ];

  constructor(
    private phaseService : PhaseService,
    private router : Router
  ) {}

  submitForm() {
    if (this.formData.world && this.formData.title) {
      this.phaseService.enviarFormulario(this.formData)
        .subscribe(
          response => {
            alert('Nova fase gravada com sucesso!');
            this.router.navigate(['nivel/lista']);
          },
          error => {
            console.error('Erro ao enviar formulário:', error);
          }
        );
    }
  }
 
}
