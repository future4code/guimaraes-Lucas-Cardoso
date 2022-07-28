import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'

export class MovieController {
    public create = async (req: Request, res: Response): Promise<void> => {
        try {
            const input = {
                title: req.body.title,
                description: req.body.description,
                duration_in_minutes: req.body.duration_in_minutes,
                year_of_release: req.body.year_of_release,
            }
    
            await new MovieBusiness().create(input)
    
            res.status(201).send({ message: "Filme cadastrado com sucesso" })
        }
        
        catch (error: any) {
            res.status(400).send(error.message)
        }
    }

    public getAll = async (req: Request, res: Response) => {
        try {
            const result = await new MovieBusiness().getAll()

            res.status(200).send(result)
        }
        
        catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}