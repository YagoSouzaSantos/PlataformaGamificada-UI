import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/components/acivities/models/activity';
import { ActivityService } from './../../../shared/components/acivities/services/activity.service';

@Component({
  selector: 'app-lista-material-auxiliar',
  templateUrl: './lista-material-auxiliar.component.html',
  styleUrls: ['../material-auxiliar.component.css']
})
export class ListaMaterialAuxiliarComponent implements OnInit {

  atividades: Activity[] = [];

  constructor(private activityService: ActivityService) {}

  ngOnInit() {
    this.carregarAtividades();
  }

  carregarAtividades() {
    this.activityService.getAll().subscribe(
      (data: any) => {
        this.atividades = data.content; 
        console.log('data:', data.content);
        console.log('atividades:', this.atividades);

      },
      (error) => {
        console.error('Erro ao carregar as atividades:', error);
      }
    );
  }

}
