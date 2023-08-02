import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TokenService } from 'src/app/core/Token/token.service';
import { DataService } from 'src/app/core/template/main/services/data.service';
import { ShopComponent } from 'src/app/shared/components/shop/shop.component';

@Component({
  selector: 'app-card-pontuacao',
  templateUrl: './card-pontuacao.component.html',
  styleUrls: ['./card-pontuacao.component.css']
})
export class CardPontuacaoComponent implements OnInit {
  avatares: { id: number, url: string }[] = [
    { id: 1, url: '../../../assets/images/avatars/astronauta01.jpg' },
    { id: 2, url: '../../../assets/images/avatars/astronauta02.jpg' },
    { id: 3, url: '../../../assets/images/avatars/astronauta03.jpg' },
  ];

  nivelAtual = 50;
  avatarUrl: string = '';

  constructor(
    public dataService: DataService,
    public dialog: MatDialog,
    public tokenService: TokenService,
    public router: Router
  ) { }

  ngOnInit() {
    const avatarId = this.dataService.getAvatar();
    this.avatarUrl = this.retornarAvatarPorId(avatarId);
  }

  openModal(): void {
    this.dialog.open(ShopComponent, {
      width: '400px', 
    });
  }

  logout(): void {
    this.tokenService.removeToken();
    this.router.navigate([''])
  }

  retornarAvatarPorId(id: number): string {
    const avatar = this.avatares.find(a => a.id === id);
    if (avatar) {
      return avatar.url;
    } else {
      return 'caminho/para/avatar-padrao.jpg';
    }
  }
}

