import { FriendDatabase } from "../data/FriendDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { friendInputDTO } from "../model/friendDTO";
import { generateId } from "../services/generateId";
import { UserBusiness } from "./UserBusiness";

export class FriendBusiness {
    
    public addFriend = async(input: friendInputDTO): Promise<void> => {

        try {
            const { user_id, friend_id } = input
    
            if (!user_id || !friend_id) throw new InvalidRequest()
            if (typeof user_id !== 'string') throw new CustomError('O ID do usuário deve ser uma string', 406)
            if (typeof friend_id !== 'string') throw new CustomError('O ID do amigo deve ser uma string', 406)
    
            await new UserBusiness().getById(user_id)
            await new UserBusiness().getById(friend_id)

            const alreadyFriends = (await this.getFriends(user_id)).includes(friend_id)

            if (alreadyFriends) throw new CustomError('Falha na requisição, usuários já são amigos', 404)
    
            const id = generateId()
    
            await new FriendDatabase().addFriend({
                id,
                user_id,
                friend_id
            })
        }

        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }

    }

    public removeFriend = async (input: friendInputDTO): Promise<void> => {
        
        try {
            const { user_id, friend_id } = input

            if (!user_id || !friend_id) throw new InvalidRequest()

            await new UserBusiness().getById(user_id)
            await new UserBusiness().getById(friend_id)

            const alreadyFriends = (await this.getFriends(user_id)).includes(friend_id)
            if (!alreadyFriends) throw new CustomError('Falha na requisição, usuários não são amigos', 404)

            await new FriendDatabase().removeFriend(user_id, friend_id)
        }

        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    public getFriends = async (id: string): Promise<any[]> => {

        try {
            await new UserBusiness().getById(id)

            const result = await new FriendDatabase().getFriends(id)

            return result.map(item => item.friend_id)
        }
        
        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }

    }
    
}