#### Гуард-функции с утиной типизацией

Создайте гуард-функцию `isGameCharacter` с использованием оператора `is`, которая проверяет, является ли объект игровым персонажем по принципам утиной типизации. Объект должен иметь свойства `name: string` и метод `move(): string`. Используйте эту гуард-функцию в функции processCharacter, которая возвращает описание персонажа (например, ` `${name} moves: ${move()}` `) для валидных персонажей или `"Not a game character!"` для остальных.

Пример использования:

```typescript
const hero = { name: "Hero", move: () => "Runs forward!" };
const fake = { name: "Dog", bark: () => "Woof!" };
console.log(processCharacter(hero)); // "Hero moves: Runs forward!"
console.log(processCharacter(fake)); // "Not a game character!"
```
[Решение](https://github.com/Urooook/Typescript/blob/main/HW5/guard.ts)
***

#### Отображения объектов

Сойздайте тип RenamedForm на основе заданного интерфейса:

```typescript
interface Form { 
  readonly name: string;
  readonly email: string; 
  readonly age: number;
}
```

Требования:

* Переименовывает свойства интерфейса Form в новые имена с префиксом form (например, name → formName).
* Ограничивает значения свойств, чтобы они были либо строками, либо undefined, используя extends.
* Уберите модификатор `readonly`.

[Решение](https://github.com/Urooook/Typescript/blob/main/HW5/renamedForm.ts)
