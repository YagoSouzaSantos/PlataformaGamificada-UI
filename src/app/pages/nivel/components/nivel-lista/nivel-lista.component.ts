import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Phase } from '../../models/Phase';
import { PhaseService } from '../../services/phase.service';

@Component({
  selector: 'app-nivel-lista',
  templateUrl: './nivel-lista.component.html',
  styleUrls: ['./nivel-lista.component.css']
})
export class NivelListaComponent implements OnInit {
  fasesCadastradas: any[] = [];
  displayedColumns: string[] = ['world', 'id', 'title'];

  constructor(private phaseService: PhaseService) {}

  ngOnInit() {
    this.obterFasesCadastradas();
  }

  obterFasesCadastradas() {
    this.phaseService.obterFasesCadastradas()
      .subscribe(
        response => {
          this.fasesCadastradas = response as any[];
        },
        error => {
          console.error('Erro ao obter fases cadastradas:', error);
        }
      );
  }
 

}

