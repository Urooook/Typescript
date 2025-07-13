enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

enum AccountStatus {
    Active = 'Active',
    Suspended = 'Suspended',
    Banned = 'Banned'
}

const AllRolesAndStatuses = {
    ...UserRole,
    ...AccountStatus
}

type RoleOrStatus = keyof typeof AllRolesAndStatuses;

function getAccessLevel(value: RoleOrStatus): string {
    // Проверяем значение и возвращаем соответствующий уровень доступа
    if (value === AllRolesAndStatuses.Admin || value === AllRolesAndStatuses.Active) {
        return "Full access";

    } else if (value === AllRolesAndStatuses.Editor) {
        return "Limited access";

    } else {
        return "No access";
    }
}

// Пример использования
console.log(getAccessLevel("Admin"));     // "Full access"
console.log(getAccessLevel("Active"));    // "Full access"
console.log(getAccessLevel("Editor"));    // "Limited access"
console.log(getAccessLevel("Viewer"));    // "No access"
console.log(getAccessLevel("Suspended")); // "No access"
console.log(getAccessLevel("Banned"));    // "No access"

// Альтернативное решение, используя вложенные объекты
const AllRolesAndStatuses2 = {
    Role: UserRole,
    Status: AccountStatus
} as const;

type RoleOrStatus2 =
    | keyof typeof AllRolesAndStatuses2.Role
    | keyof typeof AllRolesAndStatuses2.Status;

function getAccessLevel2(value: RoleOrStatus2): string {
    // Проверяем значение и возвращаем соответствующий уровень доступа
    if (value === AllRolesAndStatuses2.Role.Admin || value === AllRolesAndStatuses2.Status.Active) {
        return "Full access";

    } else if (value === AllRolesAndStatuses2.Role.Editor) {
        return "Limited access";

    } else {
        return "No access";
    }
}

{
    const enum UserRole {
        Admin,
        Editor,
        Viewer
    }

    const enum AccountStatus {
        Active,
        Suspended,
        Banned
    }

    function checkPermission(role: UserRole, status: AccountStatus): boolean {
        return role !== UserRole.Viewer && status !== AccountStatus.Banned;
    }

// Пример использования
    console.log(checkPermission(UserRole.Admin, AccountStatus.Active));     // true
    console.log(checkPermission(UserRole.Editor, AccountStatus.Suspended)); // true
    console.log(checkPermission(UserRole.Viewer, AccountStatus.Active));    // false
    console.log(checkPermission(UserRole.Admin, AccountStatus.Banned));     // false

    /*
     * Комментарий о влиянии const enum на итоговый JavaScript-код:
     *
     * 1. При использовании const enum, TypeScript не создает объект перечисления в JavaScript.
     *    Вместо этого, все ссылки на значения перечисления заменяются на их фактические значения
     *    непосредственно в местах использования (inline).
     *
     * 2. Например, код:
     *    function checkPermission(role: UserRole, status: AccountStatus): boolean {
     *      return role !== UserRole.Viewer && status !== AccountStatus.Banned;
     *    }
     *
     * 3. Будет скомпилирован в JavaScript примерно так:
     *    function checkPermission(role, status) {
     *      return role !== "Viewer" && status !== "Banned";
     *    }
     *
     * 4. Преимущества:
     *    - Меньший размер итогового JavaScript-кода (нет объявления объектов перечислений)
     *    - Потенциально более быстрое выполнение (прямое сравнение значений вместо обращения к свойствам объекта)
     *
     * 5. Ограничения:
     *    - Нельзя использовать в динамических контекстах (например, нельзя получить все значения перечисления)
     *    - Требует перекомпиляции всех файлов, использующих const enum, при изменении значений
     */
}