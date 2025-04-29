interface Person {
    name: string;
    move: () => string;
}

function isGameCharacter(person: unknown): person is Person {
    return person != null
        && typeof person === 'object'
        && 'name' in person
        && 'move' in person
        && typeof (person as Record<string, unknown>)['name'] === 'string'
        && typeof (person as Record<string, unknown>)['move'] === 'function';
}

function processCharacter(person: unknown): string {
    if(isGameCharacter(person)) {
        return `Hero moves: ${person.move()}`;
    }

    return "Not a game character!";
}


const hero = { name: "Hero", move: () => "Runs forward!" };
const fake = { name: "Dog", bark: () => "Woof!" };
console.log(processCharacter(hero)); // "Hero moves: Runs forward!"
console.log(processCharacter(fake)); // "Not a game character!"