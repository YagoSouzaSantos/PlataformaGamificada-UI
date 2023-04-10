import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Nivel } from '../../models/Nivel';
import { NivelService } from '../../services/nivel.service';

@Component({
  selector: 'app-nivel-lista',
  templateUrl: './nivel-lista.component.html',
  styleUrls: ['./nivel-lista.component.css']
})
export class NivelListaComponent implements OnInit {

  dataSource = new MatTableDataSource<Nivel>()
  readonly displayedColumns : Array<string> = ['nivel','titulo','acoes']

  constructor(private nivelservice:  NivelService) { }

  ngOnInit(): void {
    this.nivelservice.GetAll().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
    })
  }

 

}

