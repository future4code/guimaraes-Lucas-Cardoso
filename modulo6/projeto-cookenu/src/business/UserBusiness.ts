import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidEmail } from "../error/InvalidEmail";
import { InvalidRequest } from "../error/InvalidRequest";
import { UserNotFound } from "../error/UserNotFound";
import { authenticationData, login, user, userInput, getByIdInput } from "../model/user";
import { HashManager } from "../services/HashGenerator";
import IdGenerator from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class UserBusiness {

    public signup = async (input: userInput): Promise<string> => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) throw new InvalidRequest()
            if (!email.includes('@')) throw new InvalidEmail()
            if (password.length < 6) throw new CustomError('Senha inválida, deve conter pelo menos 6 caracteres', 406)

            const findEmail = await new UserDatabase().getByEmail(email)
            if (findEmail) throw new CustomError('Já existe uma conta com este email', 406)

            const id = IdGenerator.generateId()
            
            const hashPassword = await new HashManager().generateHash(password)

            const user: user = {
                id,
                name,
                email,
                password: hashPassword
            }

            await new UserDatabase().insertUser(user)

            return new TokenGenerator().generateToken({id, name, email})
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public login = async (input: login): Promise<string> => {
        
        try {
            const { email, password } = input

            if (!email || !password) throw new InvalidRequest()
            if (!email.includes('@')) throw new InvalidEmail()

            const user = await new UserDatabase().getByEmail(email)
            if (!user) throw new CustomError('Senha ou email inválidos', 400)

            const hashCompare = await new HashManager().compareHash(password, user.password)
            if (!hashCompare) throw new CustomError('Senha ou email inválidos', 400)

            const payload: authenticationData = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            return new TokenGenerator().generateToken(payload)
        }   
        
        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        } 
    }

    public getProfile = async (token: string): Promise<authenticationData> => {
        try {
            if (!token) throw new InvalidRequest()

            const { id, name, email } = new TokenGenerator().tokenData(token)

            const data = {
                id,
                name,
                email
            }

            return data
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

    public getProfileById = async ({id, token}: getByIdInput) => {
        try {
            if (!id || !token) throw new InvalidRequest()

            new TokenGenerator().tokenData(token)

            const result = await new UserDatabase().getById(id)

            if (!result) throw new UserNotFound()

            return result
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

}