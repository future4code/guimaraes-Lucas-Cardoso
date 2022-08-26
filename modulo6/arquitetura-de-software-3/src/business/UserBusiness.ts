import { UserDatabase } from "../data/UserDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { UserInputDTO } from "../model/userDTO";
import { generateId } from "../services/genderateId";


export class UserBusiness {
public createUser = async (input: UserInputDTO) => {
   try {
     const { name, nickname, email, password } = input;
 
     if (!name || !nickname || !email || !password) {
       throw new InvalidRequest();
     }
 
     const id: string = generateId()
 
     const userDatabase = new UserDatabase();
     await userDatabase.insertUser({
       id,
       name,
       nickname,
       email,
       password,
     });
   } catch (error: any) {
     throw new CustomError(error.message || error.sqlMessage, error.statusCode);
   }
 };

}

