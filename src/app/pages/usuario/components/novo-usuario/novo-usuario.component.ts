import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {
  usuarioForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.usuarioForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }
  cadastrarUsuario(): void {
    if (this.usuarioForm.invalid) {
      console.log('formulario invalido')
      return;
    }

    const usuarioData = {
      nome: this.usuarioForm.get('nome')?.value,
      email: this.usuarioForm.get('email')?.value,
      senha: this.usuarioForm.get('senha')?.value,
      tipoUsuario: 0, // Valor padrão para tipoUsuario
      nivel: 0, // Valor padrão para nivel
      pontuacao: 0 // Valor padrão para pontuacao
    };

    this.http.post('http://localhost:8091/usuarios', usuarioData, httpOptions)
      .subscribe(
        response => {
          alert('Novo usuário cadastrado com sucesso!');
          this.router.navigate(['usuario/lista']);
        },
        error => {
          console.error('Erro na solicitação', error);
          // Trate o erro de acordo com sua lógica de manipulação de erros
        }
      );
  }

}
