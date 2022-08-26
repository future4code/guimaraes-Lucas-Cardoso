import { Request, Response } from 'express'
import { PostBusiness } from '../business/PostBusiness'
import { postInputDTO } from '../model/postDTO'

export class PostController {

    public create = async (req: Request, res: Response): Promise<void> => {

        try {
            const { photo, description, type, authorId } = req.body

            const input: postInputDTO = {
                photo,
                description,
                type,
                authorId
            }

            await new PostBusiness().create(input)

            res.status(201).send({message: 'Post criado com sucesso'})
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }

    public getById = async (req: Request, res: Response): Promise<void> => {

        try {
           const { id } = req.params
           
           const result = await new PostBusiness().getById(id)

           res.status(200).send(result)
        }
        
        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }

    }

    public getFeed = async (req: Request, res: Response): Promise<void> => {

        try {
            const { id } = req.params

            const result = await new PostBusiness().getFeed(id)

            res.status(200).send(result)
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    }

}