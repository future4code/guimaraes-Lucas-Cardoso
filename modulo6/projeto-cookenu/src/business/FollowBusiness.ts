import { FollowDatabase } from "../data/FollowDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { follow, followDelInput, followInput } from "../model/follow";
import IdGenerator from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";
import { UserBusiness } from "./UserBusiness";

export class FollowBusiness {

    public follow = async (input: followInput): Promise<void> => {
        try {
            const { token, followId } = input

            const userId = new TokenGenerator().tokenData(token).id
        
            if (!userId || !followId) throw new InvalidRequest()
    
            await new UserBusiness().getProfileById({ id: followId, token })

            if (userId === followId) throw new CustomError('Você não pode seguir você mesmo', 404)
    
            const id = IdGenerator.generateId()
    
            const follow: follow = {
                id,
                userId,
                followId
            }
    
            await new FollowDatabase().follow(follow)
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
        
    }

    public unfollow = async (input: followInput): Promise<void> => {
        try {
            const { token, followId } = input

            const userId = new TokenGenerator().tokenData(token).id
    
            if (!userId || !followId) throw new InvalidRequest()
    
            await new UserBusiness().getProfileById({ id: followId, token })

            if (userId === followId) throw new CustomError('Você não pode seguir você mesmo', 404)
    
            const follow: followDelInput = {
                userId,
                followId
            }
    
            await new FollowDatabase().unfollow(follow)
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }
    
    public getFollows = async (id: string): Promise<string[]> => {
        try {
            if (!id) throw new InvalidRequest()

            const result: any[] = await new FollowDatabase().getFollows(id)

            return result.map(item => item.follow_id)
        }
        
        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }

}