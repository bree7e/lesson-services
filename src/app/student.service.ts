import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  factorial(n): number {
    return n !== 1 ? n * this.factorial(n - 1) : 1;
  }
}
