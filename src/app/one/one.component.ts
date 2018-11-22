import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    console.log(this._studentService.id);
  }
}
