import { PostDatabase } from "../data/PostDatabase";
import { CustomError } from "../error/CustomError";
import { IdNotFound } from "../error/IdNotFound";
import { InvalidRequest } from "../error/InvalidRequest";
import { POST_TYPES } from "../model/post";
import { postInputDTO } from "../model/postDTO";
import { generateId } from "../services/generateId";
import { FriendBusiness } from "./FriendBusiness";
import { UserBusiness } from "./UserBusiness";

export class PostBusiness {
    public create = async (input: postInputDTO): Promise<void> => {

        try {
            const { photo, description, type, authorId } = input

            if (!photo || !description || !type || !authorId) throw new InvalidRequest()

            if (typeof photo !== 'string') throw new CustomError('O link da foto deve ser uma string', 406)
            if (typeof description !== 'string') throw new CustomError('A descrição deve ser uma string', 406)
            if (typeof type !== 'string') throw new CustomError('O tipo deve ser uma string', 406)
            if (typeof authorId !== 'string') throw new CustomError('O ID do autor deve ser uma string', 406)

            if (type !== POST_TYPES.EVENT && type !== POST_TYPES.NORMAL) throw new CustomError('O tipo deve ser "normal" ou "event"', 406)

            new UserBusiness().getById(authorId)

            const id: string = generateId()

            await new PostDatabase().create({
                id,
                photo,
                description,
                type,
                authorId
            })
        }
        
        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }

    }

    public getById = async (id: string): Promise<any[]> => {

        try {
            const result = await new PostDatabase().getById(id)

            if (result.length < 1) throw new IdNotFound()

            return result
        }

        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }

    public getFeed = async (id: string): Promise<any[]> => {

        try {
            if (!id) throw new InvalidRequest()

            await new UserBusiness().getById(id)

            const friendsId = await new FriendBusiness().getFriends(id)

            return await new PostDatabase().getFeed(friendsId)
        }

        catch (error: any) {
            throw new CustomError(error.message || error.sqlMessage, error.statusCode)
        }
    }
}