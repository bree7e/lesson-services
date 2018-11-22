import { Component, OnInit, InjectionToken, Inject } from '@angular/core';
import { StudentService } from './student.service';
import { MockStudentService } from './mock-student.service';

const sToken = new InjectionToken<string>('блюдо');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // {
    //   provide: StudentService,
    //   useClass: MockStudentService,
    // },
    {
      provide: sToken,
      useValue: 'Пирожок',
    },
  ],
})
export class AppComponent implements OnInit {
  title = 'lesson4';
  constructor(
    private _studentService: StudentService,
    @Inject(sToken) private _dish
  ) {}

  ngOnInit() {
    const a = this._studentService.factorial(12);
    const b = this._dish;
    console.log(a, b);
  }
}
