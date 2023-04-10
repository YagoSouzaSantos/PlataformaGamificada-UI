
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  dataSource = new MatTableDataSource<Usuario>()
  readonly displayedColumns: Array<string> = ['imagem', 'nome', 'email', 'acoes']

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {

    this.usuarioService.GetAll().subscribe(data => {
      this.dataSource = new MatTableDataSource(data)
    })
  }

}
