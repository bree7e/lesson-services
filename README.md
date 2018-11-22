# Сервисы и внедрение зависимостей

Уникальная идентификатор сервиса `src\app\student.service.ts`
```ts
@Injectable()
export class StudentService {
  public id: number;

  constructor() {
    this.id = Math.random() * 100500;
  }
}
```

Создать 2 компонента. Создать провайдеры у каждого компонента на StudentService.
```bash
ng g c one
ng g c two
```

Код компонентов аналогичен.
```ts
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  constructor(private _studentService: StudentService) {}

  ngOnInit() {
    console.log(this._studentService.id);
  }
}
```

Разместить компоненты в `src\app\app.component.html`
```html
<app-one></app-one>
<app-two></app-two>
```

Перенести провайдеры в модуль

Использовать `providedIn: 'root'`

```ts
  providers: [{
    provide: sToken,
    useValue: 'Пирожок',
  }],
```

Внедрить в компонент
```ts
export class AppComponent implements OnInit {
  title = 'lesson4';
  constructor( @Inject(sToken) private _dish) {}

  ngOnInit() {
    console.log(this._dish);
  }
}
```
