import { Request, Response } from 'express'
import { UserBusiness } from '../business/UserBusiness'
import { authenticationData, getByIdInput, login, userInput } from '../model/user'

export class UserController {

    public signup = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: userInput = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }
    
            const token = await new UserBusiness().signup(input)
    
            res.status(201).send({ message: 'Usuário criado com sucesso', token })
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public login = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: login = {
                email: req.body.email,
                password: req.body.password
            }

            const token = await new UserBusiness().login(input)

            res.status(201).send({ message: 'Usuário logado com sucesso', token })
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public getProfile = async (req: Request, res: Response): Promise<void> => {
        try {
            const auth = req.headers.authorization as string

            const data = await new UserBusiness().getProfile(auth)

            res.status(200).send({ message: 'Perfil obtido com sucesso', data })
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public getProfileById = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: getByIdInput = {
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const data = await new UserBusiness().getProfileById(input)

            res.status(200).send({ message: 'Perfil obtido com sucesso', data })
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

}