type ShapeType = 'circle' | 'rectangle';

interface Shape {
    type: ShapeType;
}

interface Circle extends Shape {
    type: 'circle';
    radius: number;
}

interface Rectangle extends Shape {
    type: 'rectangle';
    width: number;
    height: number;
}

const myShape = {
    type: 'circle',
} satisfies Shape;

const myCircle = {
    type: 'circle',
    radius: 5
} satisfies Circle;

const shape: Shape = myShape; // Все ок по типам, база)))

const circle: Circle = myShape as Circle; // Опасно, ведь у myShape нет radius

function isCircle(shape: unknown): shape is Circle {
    return shape != null 
    && typeof shape === 'object' 
    && 'type' in shape 
    && (shape as Circle).type === 'circle'
    && 'radius' in shape
    && typeof (shape as Record<string, unknown>)['radius'] === 'number'
    && (shape as Record<string, unknown>)['radius'] as number > 0;
}

const circle2: Circle = isCircle(shape) ? shape : circle;

const unsafeCircle: Circle = shape as any as Circle; // Тупо забили на ts