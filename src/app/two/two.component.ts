import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
  providers: [StudentService]
})
export class TwoComponent implements OnInit {
  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    console.log(this._studentService.id);
  }
}
