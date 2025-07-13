Типизируйте заданный JS код:

```js
const defaultConfig = {
  headers: {Authorization: myToken}
};

function post(url, params) {}

function put(url, params) {}
```

Где идентификаторы `defaultConfig` и `params` соответствуют объекту:

```json
{
  headers: "Опциональный словарь строковых значений",
  body: "Опциональное тело запроса: строка, JSON-like объект или ArrayBuffer",
  contentType: "Опциональная строка с одним из заданных значений: json, text, document, buffer"
}
```

Функции `post` и `put` первым параметром ожидают строку и возвращают `Promise` с объектом вида:

```json
{
  json: "Promise с object",
  text: "Promise с string",
  document: "Promise с Document",
  buffer: "Promise с ArrayBuffer"
}
```
```js
npx jsdoc index.js
```