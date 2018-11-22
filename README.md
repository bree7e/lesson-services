# Сервисы и внедрение зависимостей

```bash
ng g service student
```

Добавить метод в `src\app\student.service.ts`
```ts
@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor() {}

  factorial(n): number {
    return n !== 1 ? n * this.factorial(n - 1) : 1;
  }
}
```

Использовать сервис в компоненте `src\app\app.component.ts`
```ts
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
```