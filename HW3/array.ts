type Person = [name: string, age: number, email?: string];

function greet(person: Person): string {
    const [name, age, email] = person;

    // Базовое приветствие
    let greeting = `Привет, ${name}! Тебе ${age} лет.`;

    // Добавляем информацию о контактах, если email указан
    if (email !== undefined) {
        greeting += ` Контакты: ${email}`;
    }

    return greeting;
}

// Примеры использования
const person1: Person = ["Иван", 30, "ivan@example.com"];
console.log(greet(person1));
// "Привет, Иван! Тебе 30 лет. Контакты: ivan@example.com"

const person2: Person = ["Мария", 25];
console.log(greet(person2));
// "Привет, Мария! Тебе 25 лет."

// Можно также использовать деструктуризацию при вызове
function printPersonInfo([name, age, email]: Person): void {
    console.log(`Имя: ${name}, Возраст: ${age}`);

    if (email) {
        console.log(`Email: ${email}`);
    }
}

printPersonInfo(person1);
// "Имя: Иван, Возраст: 30"
// "Email: ivan@example.com"