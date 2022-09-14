export type follow = {
    id: string
    userId: string
    followId: string
}

export type followDelInput = {
    userId: string
    followId: string
}

export type followInput = {
    token: string
    followId: string
}
