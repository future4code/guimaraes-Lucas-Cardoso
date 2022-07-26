import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {

    createUser = async (input: any): Promise<void> => {
        try {
            const { name, email, password } = input

            if (!name || !email || !password) {
                throw new Error('Preencha os campos "name", "email" e "password"')
            }

            if (typeof name !== 'string') {
                throw new Error('O nome deve ser uma string')
            }
            if (typeof email !== 'string') {
                throw new Error('O e-mail deve ser uma string')
            }
            if (typeof password !== 'string') {
                throw new Error('A senha deve ser uma string')
            }

            const userDB = new UserDatabase()
            await userDB.createUser({
                id: generateId(),
                name,
                email,
                password
            })
        }

        catch (error: any) {
            throw new Error(error.message)
        }
    }

    getUser = async () => {
        try {
            return await new UserDatabase().getUser()
        }
        
        catch (error: any) {
            throw new Error(error.message)
        }
    }

    deleteUser = async (id: string) => {
        try {
            const users = await new UserDatabase().getUser()
            const findId = users.find(item => item.id === id)

            if (!findId) {
                throw new Error('ID não encontrado')
            }

            await new UserDatabase().deleteUser(id)
        }
        
        catch (error: any) {
            throw new Error(error.message)
        }
    }
}