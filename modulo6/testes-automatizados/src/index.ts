import { user } from "./model/user";

export const performPurchase = (user: user, value: number): user | undefined => {
    if (user.balance < value) return undefined

    const newUser: user = {
        name: user.name,
        balance: user.balance - value
    }

    return newUser
}