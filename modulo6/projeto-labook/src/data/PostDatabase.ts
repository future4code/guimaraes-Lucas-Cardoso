import { post } from "../model/post";
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {

    private static TABLE_NAME = 'labook_posts'

    public create = async ({id, photo, description, type, authorId}: post): Promise<void> => {
        await PostDatabase.connection
        .insert({
            id,
            photo,
            description,
            type,
            author_id: authorId
        })
        .into(PostDatabase.TABLE_NAME)
    }

    public getById = async (id: string): Promise<any[]> => {
        return await PostDatabase.connection(PostDatabase.TABLE_NAME)
        .select('*')
        .where({ id })
    }

    public getFeed = async (friendsId: string[]): Promise<any[]> => {
        return await PostDatabase.connection(PostDatabase.TABLE_NAME)
        .select('*')
        .whereIn('author_id', friendsId)
        .orderBy('created_at', 'desc')
    }

}