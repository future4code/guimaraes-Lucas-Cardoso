import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_USER";

  public create = async ({ id, name, email, password }: any): Promise<void> => {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public getAll = async (): Promise<{}[]> => {
    const result = await UserDatabase.connection(UserDatabase.TABLE_NAME)
    .select('*')

    return result
  } 
}
