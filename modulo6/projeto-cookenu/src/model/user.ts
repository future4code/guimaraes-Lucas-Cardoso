export type user = {
    id: string
    name: string
    email: string
    password: string
}

export type userInput = {
    name: string
    email: string
    password: string
}

export type authenticationData = {
    id: string
    name: string
    email: string
}

export type login = {
    email: string
    password: string
}

export type getByIdInput = {
    id: string
    token: string
}