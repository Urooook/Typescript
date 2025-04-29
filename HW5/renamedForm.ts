interface Form {
    readonly name: string;
    readonly email: string;
    readonly age: number;
}

type RenamedForm = {
    -readonly [K in keyof Form as `form${Capitalize<K>}`]: Form[K] extends string ? string : string | undefined;
}

const form: RenamedForm = {
    formAge: undefined,
    formName: 'Bob',
    formEmail: 'Bla'
}