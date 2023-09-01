import { MusicaService } from './../../services/musica.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/template/main/services/data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-avatar-select',
  templateUrl: './avatar-select.component.html',
  styleUrls: ['./avatar-select.component.css']
})
export class AvatarSelectComponent implements OnInit {
  id: number;
  
  constructor(
    private dataService: DataService,
    private http: HttpClient,
    private router: Router,
    private musicaService: MusicaService
  ) { }

  ngOnInit(): void {
    this.musicaService.reproduzirMusica();
  }

  avatares: { id: number, url: string }[] = [
    { id: 1, url: '../../../assets/images/avatars/astronauta01.jpg' },
    { id: 2, url: '../../../assets/images/avatars/astronauta02.jpg' },
    { id: 3, url: '../../../assets/images/avatars/astronauta03.jpg' },
  ];

  selecionarAvatar(id: number) {
    const index1 = this.dataService.getId();

    const url = `${environment.apiUrl}/usuarios/${index1}/${id}`;

    this.http.put(url, null).subscribe(
      (response) => {
        console.log(url);
        this.dataService.setAvatar(id);
        this.router.navigate(['mundosdeestudo']);
      },
      (error) => {
        console.error('Erro ao atualizar o avatar', error);
      }
    );
  }
}  