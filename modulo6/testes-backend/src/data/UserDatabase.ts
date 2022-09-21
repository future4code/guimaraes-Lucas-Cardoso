import { UserRepository } from "../endpoints/UserRepository";
import { UserType } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {

    public getUserById = async (id: string): Promise<UserType> => {
        try {
            const result = await UserDatabase.connection('user_arq')
            .select('*')
            .where({ id })
            .first()
    
            return result
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }
}