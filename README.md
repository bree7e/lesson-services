# Сервисы и внедрение зависимостей

Убрать `providedIn: 'root'`
```ts
@Injectable()
export class StudentService {}
```

```bash
ng g service mock-student
```

```ts
@Injectable({
  providedIn: 'root'
})
export class MockStudentService {

  constructor() { }

  factorial(n): number {
    return 100500;
  }
}
```

Переделать компонент `src\app\app.component.ts`
```ts
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{
    provide: StudentService,
    useClass: MockStudentService,
  }],
})
```