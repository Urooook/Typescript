type User = {
  id: number;
  name: string;
  email?: string;
};

type UsersDict = {
    [id: User['id']]: User;
};

function getUserEmail(id: number, users: UsersDict): string | undefined {
    if(users[id]) {
        return users[id].email;
    }

    return undefined;
}

const users: UsersDict = {
    1: { id: 1, name: "John", email: "john@example.com" },
    2: { id: 2, name: "Alice", email: "alice@example.com" },
    3: { id: 3, name: "Bob" } // У этого пользователя нет email
};

console.log(getUserEmail(1, users)); // "john@example.com"
console.log(getUserEmail(3, users)); // undefined
console.log(getUserEmail(4, users)); // undefined (пользователь не существует)