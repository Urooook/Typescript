type Coordinates = [latitude: number, longitude: number, ...landmarks: string[]];

function describeLocation(coords: Coordinates): string {
    const [latitude, longitude, ...landmarks] = coords;

    let description = `Широта: ${latitude}, Долгота: ${longitude}`;

    // Добавляем информацию об ориентирах, если они есть
    if (landmarks.length > 0) {
        description += `. Ориентиры: ${landmarks.join(', ')}`;
    }

    return description;
}

const location1: Coordinates = [55.7558, 37.6173, "Кремль", "Красная площадь", "ГУМ"];
console.log(describeLocation(location1));
// "Широта: 55.7558, Долгота: 37.6173. Ориентиры: Кремль, Красная площадь, ГУМ"

const location2: Coordinates = [40.7128, -74.0060];
console.log(describeLocation(location2));
// "Широта: 40.7128, Долгота: -74.0060"

// Можно добавлять произвольное количество ориентиров
const location3: Coordinates = [48.8566, 2.3522, "Эйфелева башня"];
console.log(describeLocation(location3));
// "Широта: 48.8566, Долгота: 2.3522. Ориентиры: Эйфелева башня"

// Также можно использовать spread оператор при создании кортежа
const parisLandmarks = ["Лувр", "Нотр-Дам", "Монмартр"];
const parisLocation: Coordinates = [48.8566, 2.3522, ...parisLandmarks];
console.log(describeLocation(parisLocation));
// "Широта: 48.8566, Долгота: 2.3522. Ориентиры: Лувр, Нотр-Дам, Монмартр"