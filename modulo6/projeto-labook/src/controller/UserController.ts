import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { userInputDTO } from '../model/userDTO'

export class UserController {
    public create = async (req: Request, res: Response) => {

        try {
            const { name, email, password } = req.body

            const input: userInputDTO = {
                name,
                email,
                password
            }

            await new UserBusiness().create(input)

            res.status(201).send({message: 'Usuário criado com sucesso'})
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }

    public getById = async (req: Request, res: Response): Promise<void> => {

        try {
            const { id } = req.params

            const result = await new UserBusiness().getById(id)

            res.status(200).send(result)
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

    public getAll = async (req: Request, res: Response): Promise<void> => {

        try {
            const result = await new UserBusiness().getAll()
            res.status(200).send(result)
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }
}