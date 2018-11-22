import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockStudentService {

  constructor() { }

  factorial(n): number {
    return 100500;
  }
}
