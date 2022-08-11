import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    
    private static TABLE_NAME = 'labook_users'

    public create = async ({id, name, email, password}: user): Promise<void> => {
        await UserDatabase.connection
        .insert({
            id,
            name,
            email,
            password
        })
        .into(UserDatabase.TABLE_NAME)
    }

    public getAll = async (): Promise<any[]> => {
        return await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select('*')
    }

    public getById = async (id: string): Promise<any[]> => {
        return await UserDatabase.connection(UserDatabase.TABLE_NAME)
        .select('*')
        .where({ id })
    }
}