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

***

#### Приведение типов

В этом задании вам предстоит поработать с различными способами приведения типов в TypeScript, используя `as`, `satisfies` и, для демонстрации, двойной каст через `any`. Цель - понять особенности и риски каждого подхода.

1. Определите интерфейсы и классы:

    * Создайте интерфейс `Shape` со свойством `type: "circle" | "rectangle"`.
    * Создайте интерфейс `Circle` (наследуется от Shape) с дополнительными свойствами: `radius: number` и `type: "circle"`.
    * Создайте интерфейс `Rectangle` (наследуется от Shape) с дополнительными свойствами: `width: number` и `height: number`, `type: "rectangle"`.
    * Создайте типы литералов для `ShapeType = "circle" | "rectangle"`.

2. Создайте литеральный объект с satisfies:

    * Создайте литеральный объект `myShape` со свойствами, соответствующими `Shape`. Используйте `satisfies` для проверки, что объект соответствует `Shape`. Постарайтесь создать объект, который должен соответствовать типу `Circle`, например, со свойствами, `type: "circle", radius: 5`.

3. Ап-каст:

    * Создайте переменную `shape: Shape` и присвойте ей значение `myShape`. Это ап-каст (upcasting). Проверьте, что присваивание прошло успешно. Объясните, почему это работает.

4. Даун-каст (с as):

    * Попробуйте даун-каст (downcasting), присвоив `myShape as Circle` переменной `circle: Circle`.
    * Проверьте тип. Объясните, почему даункаст может быть опасен.

5. Даун-каст (с as и проверкой типа):

    * Создайте функцию `isCircle(shape: Shape): shape is Circle`, которая возвращает true, если `shape.type === "circle"`.
    * Используйте эту функцию, чтобы безопасно произвести даун-каст `shape` к `Circle`, если это возможно.
    * Внутри if блока, присвойте `shape` к `circle`.
    * Проверьте типы.

6. Двойной каст через `any`:

    * Cоздайте переменную `unsafeCircle: Circle` и присвойте ей значение `shape as any as Circle`.
    * Поэкспериментируйте с `unsafeCircle`: попытайтесь получить доступ к свойствам `Circle`.
    * Объясните, почему использование двойного каста через `any` является плохой практикой.
[Решение](https://github.com/Urooook/Typescript/blob/main/HW5/cast.ts)
