import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private points: number = 0;
  private level: number = 0;
  private id: number = 0;

  constructor() { }

  getPoints(): number {
    return this.points;
  }

  setPoints(points: number): void {
    this.points = points;
  }

  getLevel(): number {
    return this.level;
  }

  getId(): number {
    return this.id;
  }

  setId(id: number): void {
    this.id = id;
  }

  setLevel(level: number): void {
    this.level = level;
  }

  increasePoints(pointsToAdd: number): void {
    this.points += pointsToAdd;
  }
  
}