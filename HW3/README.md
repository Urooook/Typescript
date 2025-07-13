#### Объектные типы и словари

Создайте тип `User`, который содержит:

* `id` (число)
* `name` (строка)
* `email` (строка, необязательное поле)

Затем создайте словарь `UsersDict`, где ключ — это `id` пользователя, а значение — объект типа `User`.

Напишите функцию `getUserEmail(id: number, users: UsersDict): string | undefined`, которая возвращает email пользователя или `undefined`, если его нет.

[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/user.ts)
***

#### Объединение интерфейсов

Объявите интерфейс `User` с полями:

* `id` (число)
* `name` (строка)

Дополните этот же интерфейс (новым объявлением):

* `email` (строка, необязательное поле)
* `logIn` (метод, возвращает void)

Создайте объект, соответствующий полному интерфейсу `User`, и напишите функцию:

```typescript
function printUser(user: User): void {
// Выводит информацию о пользователе
// Если email есть - включает его в вывод
// Вызывает user.logIn()
}
```
[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/join.ts)
***

#### Наследование интерфейсов

Создайте базовый интерфейс `Shape`:

* `color` (строка)
* `area` (метод возвращает число)

Наследуйте от него два интерфейса:

* `Circle` с дополнительным полем `radius`
* `Rectangle` с полями `width` и `height`

Реализуйте функции:

```ts
function createCircle(radius: number): Circle;
function createRectangle(width: number, height: number): Rectangle;
function calcArea(shape: Shape): number;
```
[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/extends.ts)
***

#### this внутри Interface

Создайте интерфейс User, который:

1. Содержит объект data с полями:

    * `name` (строка)
    * `age` (число)

2. Имеет свойства верхнего уровня:

    * name — должно автоматически брать тип из `data.name` через `this`
    * age — аналогично, из `data.age`

[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/this.ts)
***

#### Создание и объединение перечислений

Объявите два перечисления:

* `UserRole` с вариантами: `Admin`, `Editor`, `Viewer`;

* `AccountStatus` с вариантами: `Active`, `Suspended`, `Banned`.

Создайте новый объект `AllRolesAndStatuses`, который объединяет оба перечисления с помощью spread-оператора (`...`) и `as const` (подсказка: помните про возможность конфликта дискрименанта при объединении).

На основе этого объекта создайте тип `RoleOrStatus` (подсказка: используйте `keyof typeof`).

Напишите функцию `getAccessLevel(value: RoleOrStatus): string`, которая возвращает:

* `"Full access"` для `Admin` и `Active`;
* `"Limited access"` для `Editor`;
* `"No access"` для `Viewer`, `Suspended` и `Banned`.

#### Оптимизация с помощью const enum

Перепишите `UserRole` и `AccountStatus` как `const enum`.

Напишите функцию `checkPermission(role: UserRole, status: AccountStatus): boolean`, которая возвращает:

* `true`, если роль не `Viewer` и статус не `Banned`
* `false` во всех остальных случаях

Прокомментируйте, как `const enum` влияет на итоговый JavaScript-код.

[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/joinEnums.ts)
***

#### Базовые операции с кортежами

Объявите кортеж `Person` с именованными полями:

* `name` (строка, обязательное)
* `age` (число, обязательное)
* `email` (строка, опциональное)

Создайте функцию:

```typescript
// Возвращает строку вида "Привет, {name}! Тебе {age} лет."
// Если есть email, добавляет " Контакты: {email}"
function greet(person: Person): string {}
```
[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/array.ts)
*** 

#### Кортежи с rest-параметрами

Создайте тип `Coordinates`:

* Первые 2 элемента — числа (`latitude`, `longitude`).
* Остальные элементы (если есть) — строки с названиями ориентиров (`...landmarks: string[]`).

Напишите функцию:

```typescript
// Возвращает строку:
// "Широта: {lat}, Долгота: {lon}. Ориентиры: {landmarks.join(', ')}"
// Если ориентиров нет, выводит только координаты
function describeLocation(coords: Coordinates): string {}
```
[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/arrayRest.ts)
***

#### Readonly и деструктуризация

Объявите readonly кортеж RGB с тремя числами.

Напишите функцию:

```typescript
// Возвращает инвертированный цвет (255 - r, 255 - g, 255 - b)
function invertColor([r, g, b]: RGB): RGB {}
```

Создайте readonly кортеж RGBA на основе RGB + альфа-канал (число, опциональное).

[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/readonly.ts)
***

#### Гибридные кортежи

Создайте кортеж Order:

* Первый элемент — `id` (строка).
* Второй — массив товаров (`string[]`).
* Третий — опциональный статус (`"pending" | "completed"`).
* Четвертый и далее — дополнительные метаданные `(...meta: [string, any][])`.

Напишите функцию:

```typescript
// Возвращает строку:
// "Заказ #{id}. Товары: {items.join(', ')}. Статус: {status || 'не указан'}"
// Если есть метаданные, добавляет их в конец
function processOrder(order: Order): string {}
```
[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/hybridArray.ts)
***

#### Пересечение типов

Создайте два типа:

* `Employee` (с полями `id: number` и `department: string`)
* `Manager` (с полями `teamSize: number` и `role: string`)

Создайте тип `TeamLead`, который является пересечением Employee и Manager. Затем создайте объект этого типа.

[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/intersectTypes.ts)
***
#### Тип never

Напишите функцию `throwError(message: string): never`, которая выбрасывает ошибку с переданным сообщением.

[Решение](https://github.com/Urooook/Typescript/blob/main/HW3/never.ts)