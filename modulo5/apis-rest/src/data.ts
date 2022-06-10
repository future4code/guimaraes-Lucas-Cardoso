import { v4 as generateId } from 'uuid'

export type user = {
    id: string,
    name: string,
    email: string,
    type: string,
    age: number
}

export enum UserType {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

export let users: user[] = [
    {
        id: generateId(),
        name: "Alice",
        email: "alice@email.com",
        type: UserType.ADMIN,
        age: 12
    },
    {
        id: generateId(),
        name: "Bob",
        email: "bob@email.com",
        type: UserType.NORMAL,
        age: 36
    },
    {
        id: generateId(),
        name: "Coragem",
        email: "coragem@email.com",
        type: UserType.NORMAL,
        age: 21
    },
    {
        id: generateId(),
        name: "Dory",
        email: "dory@email.com",
        type: UserType.NORMAL,
        age: 17
    },
    {
        id: generateId(),
        name: "Elsa",
        email: "elsa@email.com",
        type: UserType.ADMIN,
        age: 17
    },
    {
        id: generateId(),
        name: "Fred",
        email: "fred@email.com",
        type: UserType.ADMIN,
        age: 60
    }
]