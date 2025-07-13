function throwError(message: string): never {
    throw new Error(message);
}

try {
    throwError("Произошла критическая ошибка!");

} catch (error) {
    console.error("Перехвачена ошибка:", error);
}

// Функция, использующая throwError для обработки недопустимых значений
function processValue(value: string | number): string {
    if (typeof value === "string") {
        return `Строка: ${value}`;

    } else if (typeof value === "number") {
        return `Число: ${value}`;

    } else {
        // Эта ветка никогда не должна выполниться из-за типизации,
        // но компилятор требует её наличия для полноты проверки
        return throwError(`Недопустимый тип: ${typeof value}`);
    }
}

console.log(processValue("hello")); // "Строка: hello"
console.log(processValue(42));      // "Число: 42"

// Функция, которая никогда не завершается нормально
function infiniteLoop(): never {
    while (true) {
        // Бесконечный цикл
    }
}

// Пример использования never для исчерпывающей проверки типов
type Shape = Circle | Square;

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;

        case "square":
            return shape.sideLength ** 2;

        default:
            // Эта функция гарантирует, что все возможные типы Shape обработаны
            // Если добавится новый тип, TypeScript выдаст ошибку компиляции
            const exhaustiveCheck: never = shape;
            return throwError(`Необработанная фигура: ${exhaustiveCheck}`);
    }
}