import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private points: number = 0;
  private level: number = 0;
  private id: number = 0;
  private user: string = '';
  private avatar: number;
  private fuel: number;
  private lifes: number;
  maxFuel = 100;

  constructor() { }

  getLifes(): number {
    return this.lifes;
  }

  setLifes(lifes: number): void {
    this.lifes = lifes;
  }


  getPoints(): number {
    return this.points;
  }

  setPoints(points: number): void {
    this.points = points;
  }

  getFuel(): number {
    return this.fuel;
  }

  setFuel(fuel: number): void {
    this.fuel = fuel;
  }

  getLevel(): number {
    return this.level;
  }

  getUser(): string {
    return this.user;
  }

  setUser(user: string): void {
    this.user = user;
  }

  getAvatar(): number {
    return this.avatar;
  }

  setAvatar(avatar: number): void {
    this.avatar = avatar;
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


  increaseFuel(value: number) {
    const newValue = this.fuel + value;

    if (newValue >= 0 && newValue <= this.maxFuel) {
      this.fuel = newValue;
    }
  }

  increaseLifes(value: number) {
    const newValue = this.lifes + value;
    this.lifes = newValue;
  }
}