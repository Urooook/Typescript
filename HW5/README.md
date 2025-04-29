#### Гуард-функции с утиной типизацией

Создайте гуард-функцию `isGameCharacter` с использованием оператора `is`, которая проверяет, является ли объект игровым персонажем по принципам утиной типизации. Объект должен иметь свойства `name: string` и метод `move(): string`. Используйте эту гуард-функцию в функции processCharacter, которая возвращает описание персонажа (например, ` `${name} moves: ${move()}` `) для валидных персонажей или `"Not a game character!"` для остальных.

Пример использования:

```typescript
const hero = { name: "Hero", move: () => "Runs forward!" };
const fake = { name: "Dog", bark: () => "Woof!" };
console.log(processCharacter(hero)); // "Hero moves: Runs forward!"
console.log(processCharacter(fake)); // "Not a game character!"
```