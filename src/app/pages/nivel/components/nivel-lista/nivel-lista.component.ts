import { MatTableDataSource } from '@angular/material/table';
import { NivelService } from './../../services/nivel.service';
import { Component, OnInit } from '@angular/core';
import { Nivel } from '../../models/Nivel';

@Component({
  selector: 'app-nivel-lista',
  templateUrl: './nivel-lista.component.html',
  styleUrls: ['./nivel-lista.component.css']
})
export class NivelListaComponent implements OnInit {

  dataSource = new MatTableDataSource<Nivel>()
  readonly displayedColumns : Array<string> = ['nivelId','titulo','emblema','acoes']

  constructor(private nivelservice:  NivelService) { }

  ngOnInit(): void {
    this.nivelservice.GetAll().subscribe(data =>{
      this.dataSource = new MatTableDataSource(data)
    })
  }

}

