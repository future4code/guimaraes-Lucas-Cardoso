import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'

export class UserController {
    createUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: any = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            await new UserBusiness().createUser(input)

            res.status(201).send({ message: 'Usuário criado com sucesso'})
        }
        
        catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    getUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await new UserBusiness().getUser()
            res.status(200).send(users)
        }
        
        catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    deleteUser = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params

            await new UserBusiness().deleteUser(id)

            res.status(202).send({ message: 'Usuário deletado com sucesso'})
        }
        
        catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}