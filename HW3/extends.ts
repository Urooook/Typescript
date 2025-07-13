interface Shape {
    color: string;
    area(): number;
}

interface Circle extends Shape {
    radius: number;
}

interface Rectangle extends Shape {
    width: number;
    height: number;
}

function createCircle(radius: number): Circle {
    return {
        radius,
        color: "red", // Значение по умолчанию
        area() {
            return Math.PI * this.radius * this.radius;
        }
    };
}

function createRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,
        color: "blue", // Значение по умолчанию
        area() {
            return this.width * this.height;
        }
    };
}

function calcArea(shape: Shape): number {
    return shape.area();
}

const circle = createCircle(5);
console.log(`Площадь круга: ${calcArea(circle)}`); // Примерно 78.54

const rectangle = createRectangle(4, 6);
console.log(`Площадь прямоугольника: ${calcArea(rectangle)}`); // 24

// Можно также изменить цвет
circle.color = "green";
console.log(`Цвет круга: ${circle.color}`);