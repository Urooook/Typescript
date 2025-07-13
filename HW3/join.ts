interface User {
    id: number;
    name: string;
}

interface User {
    email?: string;
    logIn(): void;
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    logIn() {
        console.log(`User ${this.name} logged in`);
    }
};

function printUser(user: User): void {
    console.log(`User ID: ${user.id}`);
    console.log(`Name: ${user.name}`);

    // Проверяем наличие email и включаем его в вывод, если он есть
    if (user.email) {
        console.log(`Email: ${user.email}`);
    }

    user.logIn();
}

printUser(user);

// Пример с пользователем без email
const userWithoutEmail: User = {
    id: 2,
    name: "Alice Smith",
    logIn() {
        console.log(`User ${this.name} logged in`);
    }
};

printUser(userWithoutEmail);
