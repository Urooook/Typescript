type RGB = readonly [r: number, g: number, b: number];
type RGBA = readonly [r: number, g: number, b: number, a?: number];


function invertColor([r, g, b]: RGB): RGB {
    return [255 - r, 255 - g, 255 - b] as const;
}

const red: RGB = [255, 0, 0] as const;
console.log(`Красный: ${red}`);
console.log(`Инвертированный красный: ${invertColor(red)}`); // [0, 255, 255]

const green: RGB = [0, 255, 0] as const;
console.log(`Зеленый: ${green}`);
console.log(`Инвертированный зеленый: ${invertColor(green)}`); // [255, 0, 255]

const blue: RGB = [0, 0, 255] as const;
console.log(`Синий: ${blue}`);
console.log(`Инвертированный синий: ${invertColor(blue)}`); // [255, 255, 0]

// Примеры с RGBA
const redWithAlpha: RGBA = [255, 0, 0, 0.5] as const;
console.log(`Красный с прозрачностью: ${redWithAlpha}`);

const blueWithoutAlpha: RGBA = [0, 0, 255] as const;
console.log(`Синий без прозрачности: ${blueWithoutAlpha}`);

function getRGBADescription([r, g, b, alpha]: RGBA): string {
    let description = `RGB(${r}, ${g}, ${b})`;

    if (alpha !== undefined) {
        description = `RGBA(${r}, ${g}, ${b}, ${alpha})`;
    }

    return description;
}

console.log(getRGBADescription(redWithAlpha));     // "RGBA(255, 0, 0, 0.5)"
console.log(getRGBADescription(blueWithoutAlpha)); // "RGB(0, 0, 255)"

// Попытка изменить readonly кортеж вызовет ошибку компиляции
// red[0] = 100; // Error: Cannot assign to '0' because it is a read-only property