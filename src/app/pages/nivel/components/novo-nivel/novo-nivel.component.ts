import { Router } from '@angular/router';
import { NivelService } from './../../services/nivel.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-novo-nivel',
  templateUrl: './novo-nivel.component.html',
  styleUrls: ['./novo-nivel.component.css']
})
export class NovoNivelComponent implements OnInit {

  formulario: any;

  constructor(private nivelService: NivelService,
    private router: Router) { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      titulo: new FormControl(null),
      descricao: new FormControl(null),
      emblema: new FormControl('folder')
    })
  }

  get propriedade() {
    return this.formulario.controls;
  }

  PostForm(): void {
    const nivel = this.formulario.value;
    this.nivelService.PostNivel(nivel).subscribe(resultado => {
      this.router.navigate(['nivel/lista']);

    })
  }
}
