type Employee = {
    id: number;
    department: string;
};

type Manager = {
    teamSize: number;
    role: string;
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    id: 12345,
    department: "Engineering",
    teamSize: 8,
    role: "Technical Lead"
};

// Проверяем, что объект содержит все необходимые поля
console.log(`ID: ${teamLead.id}`);
console.log(`Отдел: ${teamLead.department}`);
console.log(`Размер команды: ${teamLead.teamSize}`);
console.log(`Роль: ${teamLead.role}`);

function promoteTeamLead(teamLead: TeamLead): void {
    console.log(`${teamLead.role} из отдела ${teamLead.department} с ID ${teamLead.id} получает повышение!`);
    console.log(`Теперь под руководством ${teamLead.role} находится ${teamLead.teamSize + 5} человек.`);
}

promoteTeamLead(teamLead);

// Можно также использовать объект Employee или Manager там, где ожидается TeamLead
function printEmployeeInfo(employee: Employee): void {
    console.log(`Сотрудник ID ${employee.id} работает в отделе ${employee.department}`);
}

function printManagerInfo(manager: Manager): void {
    console.log(`${manager.role} руководит командой из ${manager.teamSize} человек`);
}

// Объект TeamLead можно передать в обе функции
printEmployeeInfo(teamLead);
printManagerInfo(teamLead);

// Но нельзя передать объект Employee в функцию, ожидающую Manager, и наоборот
const employee: Employee = {
    id: 67890,
    department: "Marketing"
};

const manager: Manager = {
    teamSize: 5,
    role: "Product Manager"
};

printEmployeeInfo(employee); // OK
// @ts-expect-error Property 'teamSize' is missing in type 'Employee'
printManagerInfo(employee);

printManagerInfo(manager); // OK
// @ts-expect-error Property 'id' is missing in type 'Manager'
printEmployeeInfo(manager);