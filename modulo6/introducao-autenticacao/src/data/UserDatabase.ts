import { CustomError } from "../error/customError";
import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public signup = async (user: user) => {

    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    }
    
    catch (error: any) {
      throw new CustomError(400, error.message);
    }

  };

  public getByEmail = async (email: string): Promise<any> => {

    const result = await UserDatabase.connection("Auth_users")
    .select('*')
    .where({ email })

    return result[0]
  }

  public getEmailById = async (id: string): Promise<any> => {

    const result = await UserDatabase.connection("Auth_users")
    .select('email')
    .where({ id })

    return result[0]
  }

}
