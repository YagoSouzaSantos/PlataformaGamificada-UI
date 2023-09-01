import { UsuarioService } from './../../../pages/usuario/services/usuario.service';
import { DataService } from 'src/app/core/template/main/services/data.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/core/template/main/services/usuarios.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  constructor(
    private dialogRef: MatDialogRef<ShopComponent>,
    private dataService: DataService,
    private usuariosService: UsuariosService
  ) { }

  fecharModal(): void {
    this.dialogRef.close();
  }

  comprarCombustivel(): void {
    this.dataService.increaseFuel(10);
    this.dataService.increasePoints(-50);

    this.usuariosService.atualizarValores(
      this.dataService.getId(),
      this.dataService.getPoints(),
      this.dataService.getLevel(),
      this.dataService.getFuel(),
      this.dataService.getLifes(),
      this.dataService.getScore()
    ).subscribe( );
  }

  comprarVidas(): void {
    this.dataService.increaseLifes(10);
    this.dataService.increasePoints(-1000);

    this.usuariosService.atualizarValores(
      this.dataService.getId(),
      this.dataService.getPoints(),
      this.dataService.getLevel(),
      this.dataService.getFuel(),
      this.dataService.getLifes(),
      this.dataService.getScore()
    ).subscribe( );
  }
}
