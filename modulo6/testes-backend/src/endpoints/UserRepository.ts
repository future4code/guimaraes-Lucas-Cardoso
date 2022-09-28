import { UserType } from "../model/user";

export interface UserRepository {
    getUserById (id: string): Promise<UserType | undefined>
}