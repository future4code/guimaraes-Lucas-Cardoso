import { UserRepository } from "../../../endpoints/UserRepository";
import { UserType } from "../../../model/user";

export class UserDatabaseMock implements UserRepository {
    getUserById = async (id: string): Promise<UserType | undefined> => {
        if (id === '1') {
            return {
                id: '1',
                name: 'Lucas Cardoso',
                email: 'lucas@email.com',
                password: '123456',
                role: 'NORMAL'
            }
        } else {
            return undefined
        }
    }
}