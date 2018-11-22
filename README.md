# Сервисы и внедрение зависимостей

Создать `InjectionToken`
```ts
const sToken = new InjectionToken<string>('блюдо');
```

Создать провайдер
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
