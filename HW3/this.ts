interface UserData  {
    name: string;
    age: number;
}

interface User {
    data: UserData;
    get name(): this['data']['name'];
    get age(): this['data']['age'];
}

const user: User = {
    data: {
        name: "John Doe",
        age: 30
    },

    get name() { return this.data.name; },
    get age() { return this.data.age; }
};

function printUserInfo(user: User): void {
    console.log(`Имя: ${user.name}, Возраст: ${user.age}`);
    console.log(`Из data - Имя: ${user.data.name}, Возраст: ${user.data.age}`);
}

printUserInfo(user);