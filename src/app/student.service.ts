import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public id: number;

  constructor() {
    this.id = Math.random() * 100500;
  }

  factorial(n): number {
    return n !== 1 ? n * this.factorial(n - 1) : 1;
  }
}
