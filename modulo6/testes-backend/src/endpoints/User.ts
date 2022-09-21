import { CustomError } from "../errors/CustomError";
import { UserType } from "../model/user";
import { UserRepository } from "./UserRepository";

export class User {
    constructor (
        private userDatabase: UserRepository
    ) {}

    public getUserById = async (id: string): Promise<UserType> => {
        try {
            const user = await this.userDatabase.getUserById(id)

            if (!user) {
                throw new CustomError(404, "User not found")
            }
    
            return user
        }
        
        catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
        
    }
}