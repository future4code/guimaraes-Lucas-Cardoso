import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, UserNotFound } from "../error/customError";
import { UserInputDTO, user } from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {

  public signup = async (input: UserInputDTO): Promise<string> => {

    try {
      const { email, password } = input;

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const id = new IdGenerator().generateId()

      const user: user = {
        id,
        email,
        password,
      };

      await new UserDatabase().signup(user)

      return new Authenticator().generateToken({id})
    }
    
    catch (error: any) {
      throw new CustomError(400, error.message);
    }

  };

  public login = async (input: UserInputDTO): Promise<string> => {
    const { email, password } = input

    if (!email || !password) {
      throw new CustomError(400, 'Preencha os campos "email" e "password"')
    }

    if (!email.includes('@')) {
      throw new InvalidEmail()
    }

    const user = await new UserDatabase().getByEmail(email)

    if (!user) {
      throw new UserNotFound()
    }

    if (user.password !== password) {
      throw new CustomError(400, 'Senha inválida')
    }

    const token = new Authenticator().generateToken({ id: user.id })

    return token
  }

  public profile = async (token: string): Promise<any> => {

    try {
      const { id } = new Authenticator().getTokenData(token)
      const { email } = await new UserDatabase().getEmailById(id)

      return { id, email }
    }

    catch (error: any) {
      throw new CustomError(400, error.message);
    }

  }
}
