import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lesson4';
  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    const a = this._studentService.factorial(12);
    console.log(a);
  }
}
