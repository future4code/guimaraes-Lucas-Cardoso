import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'

export class UserBusiness {
  public create = async ({ email, name, password }: any):Promise<void> => {
    try {
      if (!email || !name || !password) {
        throw new Error("Dados inválidos (email, name, password)")
      }

      const id = generateId()

      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name,
        email,
        password
      })
    }

    catch (error: any) {
      throw new Error(error.message)
    }
  }

  public getAll = async () => {
    try {
      return await new UserDatabase().getAll()
    }

    catch (error: any) {
      throw new Error(error.message)
    }
  }

}
