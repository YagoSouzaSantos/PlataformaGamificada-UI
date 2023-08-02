import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {
  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio('../../../assets/audio/background.mp3');
    this.audio.loop = true; 
  }

  reproduzirMusica() {
    this.audio.play();
  }

  pausarMusica() {
    this.audio.pause();
  }
}
