import { Request, Response } from 'express'
import { FollowBusiness } from '../business/FollowBusiness'
import { followInput } from '../model/follow'

export class FollowController {

    public follow = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: followInput = {
                token: req.headers.authorization as string,
                followId: req.body.userToFollowId
            }
    
            await new FollowBusiness().follow(input)

            res.status(201).send({ message: 'Seguido com sucesso'})
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public unfollow = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: followInput = {
                token: req.headers.authorization as string,
                followId: req.body.userToUnfollowId
            }

            await new FollowBusiness().unfollow(input)

            res.status(201).send({ message: 'Deixado de seguir com sucesso'})
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

}