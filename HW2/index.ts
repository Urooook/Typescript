type Identifier = string | number;

const read = Symbol('Read');
const write = Symbol('Write');
const update = Symbol('Update');

type Operations = typeof read | typeof write | typeof update;

type Grades = number[];

const GradeStatus = 'pass' | 'fail';

function CalculateArea(radius: number): number;
function CalculateArea(width: number, height: number): number;
function CalculateArea(a: number, b: number, c: number): number;
function CalculateArea(a: number, b?: number, c?: number): number {
    if (b != undefined) {
        return a * b;
    }

    if (b != undefined && c != undefined) {
        const s = (a + b + c) / 2;
        return Math.sqrt(s * (s - a) * (s - b) * (s - c));
    }

    return Math.PI * Math.pow(a, 2);
}

type CssSize = `${bigint}${'px' | '%'}`;

{
    const test: CssSize = "123px";
}

{
    // @ts-expect-error
    const test: CssSize = "123";
}

{
    // @ts-expect-error
    const test: CssSize = "12.34%";
}