export interface User {
    email: string;
    password: string;
    passwordConfirm: string;
    person: {
        name: string;
        surname: string;
    };
}