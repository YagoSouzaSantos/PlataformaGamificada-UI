import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-novo-nivel',
  templateUrl: './novo-nivel.component.html',
  styleUrls: ['./novo-nivel.component.css']
})
export class NovoNivelComponent implements OnInit {

  formulario: any;

  constructor() { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
      emblema: new FormControl('folder')
    })
  }

  get propriedade(){
    return this.formulario.controls;
  }
}
