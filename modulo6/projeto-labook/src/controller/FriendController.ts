import { Request, Response } from 'express'
import { FriendBusiness } from '../business/FriendBusiness'
import { friendInputDTO } from '../model/friendDTO'

export class FriendController {
    
    public addFriend = async (req: Request, res: Response): Promise<void> => {

        try {
            const user_id = req.params.userId
            const friend_id = req.query.friendId as string

            const input: friendInputDTO = {
                user_id,
                friend_id
            }

            await new FriendBusiness().addFriend(input)

            res.status(201).send({message: 'Amigo adicionado com sucesso'})
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public removeFriend = async (req: Request, res: Response): Promise<void> => {

        try {
            const user_id = req.params.userId
            const friend_id = req.query.friendId as string

            const input: friendInputDTO = {
                user_id,
                friend_id
            }

            await new FriendBusiness().removeFriend(input)

            res.status(203).send({message: 'Amigo removido com sucesso'})
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }
    
    public getFriends = async (req: Request, res: Response): Promise<void> => {

        try {
            const { id } = req.params

            const result = await new FriendBusiness().getFriends(id)

            res.status(200).send(result)
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}