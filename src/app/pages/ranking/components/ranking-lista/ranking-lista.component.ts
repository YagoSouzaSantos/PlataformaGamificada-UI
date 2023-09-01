import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from 'src/app/pages/usuario/services/usuario.service';


@Component({
  selector: 'app-ranking-lista',
  templateUrl: './ranking-lista.component.html',
  styleUrls: ['./ranking-lista.component.css']
})
export class RankingListaComponent implements OnInit {
  public single: any[] = [];
  public chartData: any[] = [];
  public filteredPlayersData: any[] = [];
  public chartDataPie: any[] = [];
  view: [number,number] = [700, 400];

  constructor(
    private usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.usuarioService.GetAll().subscribe(data => {
      console.log(data);
      this.single = data;

      this.filteredPlayersData = this.single.filter(player => player.tipoUsuario === 0);

      this.chartData = this.filteredPlayersData.map(player => {
        return {
          name: player.nome,
          value: player.pontuacao
        };
      });

      const groupedByLevel = this.filteredPlayersData.reduce((acc, player) => {
        const level = player.nivel;
        if (!acc[level]) {
          acc[level] = 0;
        }
        acc[level]++;
        return acc;
      }, {});

      this.chartDataPie = Object.keys(groupedByLevel).map(level => {
        return {
          name: `Nível ${level}`,
          value: groupedByLevel[level]
        };
      });

    });
  }

  
}
