import { BaseDatabase } from "./BaseDatabase";
import { v4 as generateId } from 'uuid'
import { User } from "../types/User";

export class UserDatabase extends BaseDatabase {

    public createUser = async (user: User): Promise<void> => {
        await UserDatabase.connection('User_Arq')
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password
        })
    }

    public getUser = async () => {
        const result = await UserDatabase.connection('User_Arq')
        .select('*')

        return result
    }

    public deleteUser = async (id: string) => {
        await UserDatabase.connection('User_Arq')
        .where('id', id)
        .del()
    }

}