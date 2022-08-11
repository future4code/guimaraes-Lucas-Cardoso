import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { IdNotFound } from "../error/IdNotFound";
import { InvalidRequest } from "../error/InvalidRequest";
import { userInputDTO } from "../model/userDTO";
import { generateId } from "../services/generateId";

export class UserBusiness {
    public create = async (input: userInputDTO): Promise<void> => {

        try {
            const {name, email, password} = input
    
            if (!name || !email || !password) throw new InvalidRequest()
            
            if (typeof name !== 'string') throw new CustomError('O nome deve ser uma string', 406)
            if (typeof email !== 'string') throw new CustomError('O e-mail deve ser uma string', 406)
            if (typeof password !== 'string') throw new CustomError('A senha deve ser uma string', 406)
    
            const id: string = generateId()
    
            await new UserDatabase().create({
                id,
                name,
                email,
                password
            })
        }

        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
        
    }

    public getById = async (id: string): Promise<any[]> => {

        try {
            const result = await new UserDatabase().getById(id)

            if (result.length < 1) throw new IdNotFound()

            return result
        }

        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}