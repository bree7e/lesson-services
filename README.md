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

Убрать из компонентов  one & two провайдер `StudentService`
`id` станут `undefined`, потому что теперь `StudentService` будет браться из `AppComponent`,
а в нем он подменён `MockStudentService`.

Убрать компонента `AppComponent` провайдер `StudentService` 
Разместить провайдер `StudentService` в модуле `AppModule`.
```ts
@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Убрать провайдер `StudentService` из модуля `AppModule` и использовать для сервиса `providedIn: 'root'`

