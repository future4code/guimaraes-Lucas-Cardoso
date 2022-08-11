import { friend } from "../model/friend";
import { friendInputDTO } from "../model/friendDTO";
import { BaseDatabase } from "./BaseDatabase";

export class FriendDatabase extends BaseDatabase {

    private static TABLE_NAME = 'labook_friends'

    public addFriend = async ({id, user_id, friend_id}: friend): Promise<void> => {
        await FriendDatabase.connection
        .insert({
            id,
            user_id,
            friend_id
        })
        .into(FriendDatabase.TABLE_NAME)
    }

    public removeFriend = async (user_id: string, friend_id: string): Promise<void> => {
        await FriendDatabase.connection(FriendDatabase.TABLE_NAME)
        .del()
        .where({ user_id })
        .andWhere({ friend_id })
    }

    public getFriends = async (id: string): Promise<any[]> => {
        return await FriendDatabase.connection(FriendDatabase.TABLE_NAME)
        .select('friend_id')
        .where('user_id', id)
    }
}