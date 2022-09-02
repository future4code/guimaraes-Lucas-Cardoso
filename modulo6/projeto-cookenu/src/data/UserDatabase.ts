import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

    private static TABLE_NAME = 'cookenu_users'
    
    public insertUser = async ({id, name, email, password}: user): Promise<void> => {
        try {
            await UserDatabase.connection(UserDatabase.TABLE_NAME)
            .insert({
                id,
                name,
                email,
                password
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    public getByEmail = async (email: string): Promise<user> => {
        try {
            return await UserDatabase.connection(UserDatabase.TABLE_NAME)
            .select('*')
            .where({email})
            .first()
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    public getById = async (id: string): Promise<user> => {
        try {
            return await UserDatabase.connection(UserDatabase.TABLE_NAME)
            .select('id', 'name', 'email')
            .where({id})
            .first()
            }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

}