import { follow, followDelInput } from "../model/follow";
import { BaseDatabase } from "./BaseDatabase";

export class FollowDatabase extends BaseDatabase {

    private static TABLE_NAME = 'cookenu_follows'

    public follow = async ({id, userId, followId}: follow): Promise<void> => {
        try {
            await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
            .insert({
                id,
                user_id: userId,
                follow_id: followId
            })
        }
        
        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    public unfollow = async ({userId, followId}: followDelInput): Promise<void> => {
        try {
            await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
            .delete()
            .where({
                user_id: userId,
                follow_id: followId
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    public getFollows = async (id: string): Promise<string[]> => {
        try {
            return await FollowDatabase.connection(FollowDatabase.TABLE_NAME)
            .select('follow_id')
            .where({ user_id: id })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

}