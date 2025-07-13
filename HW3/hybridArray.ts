type Order = [
    id: string,
    orders: string[],
    status?: 'pending' | 'completed',
    ...meta: [string, any][]
];

function processOrder(order: Order): string {
    const [id, items, status, ...meta] = order;

    let result = `Заказ #${id}. Товары: ${items.join(', ')}. Статус: ${status || 'не указан'}`;

    if (meta.length > 0) {
        const metaInfo = meta.map(([key, value]) => `${key}: ${value}`).join(', ');
        result += `. Метаданные: ${metaInfo}`;
    }

    return result;
}

// Заказ с id, товарами и статусом
const order1: Order = [
    "12345",
    ["Ноутбук", "Мышь", "Клавиатура"],
    "pending"
];

console.log(processOrder(order1));
// "Заказ #12345. Товары: Ноутбук, Мышь, Клавиатура. Статус: pending"

// Заказ с id и товарами, без статуса
const order2: Order = [
    "67890",
    ["Монитор", "Наушники"]
];

console.log(processOrder(order2));
// "Заказ #67890. Товары: Монитор, Наушники. Статус: не указан"

// Заказ с id, товарами, статусом и метаданными
const order3: Order = [
    "54321",
    ["Смартфон"],
    "completed",
    ["дата", "2023-05-15"],
    ["доставка", "экспресс"],
    ["оплата", "картой"]
];

console.log(processOrder(order3));
// "Заказ #54321. Товары: Смартфон. Статус: completed. Метаданные: дата: 2023-05-15, доставка: экспресс, оплата: картой"

// Заказ с id, товарами и метаданными, без статуса
const order4: Order = [
    "98765",
    ["Планшет", "Чехол"],
    undefined,
    ["скидка", "10%"],
    ["комментарий", "Подарочная упаковка"]
];

console.log(processOrder(order4));
// "Заказ #98765. Товары: Планшет, Чехол. Статус: не указан. Метаданные: скидка: 10%, комментарий: Подарочная упаковка"