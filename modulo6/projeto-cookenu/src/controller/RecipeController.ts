import { Request, Response} from 'express'
import { RecipeBusiness } from '../business/RecipeBusiness'
import { getRecipe, recipeInput } from '../model/recipe'

export class RecipeController {

    public postRecipe = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: recipeInput = {
                title: req.body.title,
                description: req.body.description,
                token: req.headers.authorization as string
            }

            await new RecipeBusiness().postRecipe(input)

            res.status(201).send({ message: 'Receita criada com sucesso' })
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public getRecipe = async (req: Request, res: Response): Promise<void> => {
        try {
            const input: getRecipe = {
                id: req.params.id,
                token: req.headers.authorization as string
            }
            

            const recipe = await new RecipeBusiness().getRecipe(input)

            res.status(201).send({ message: 'Receita obtida com sucesso', recipe })
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

    public getFeed = async (req: Request, res: Response): Promise<void> => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjFkYTU2YjZjLTRmN2UtNGY3OC05NGY4LWQxMGVmMjg2OTFkYiIsIm5hbWUiOiJMdWNhcyBDYXJkb29zIiwiZW1haWwiOiJsdWNhc0BlbWFpbC5jb20iLCJpYXQiOjE2NjE2OTc4MDUsImV4cCI6MTY2MTcwMTQwNX0.IPfA4xyl1DqKmBIzwkZv9zAWxu17H8sQfH032PILgQg'

            console.log(token)

            const feed = await new RecipeBusiness().getFeed(token)

            res.status(200).send({ message: 'Feed obtido com sucesso', feed })
        }

        catch (error: any) {
            res.status(error.statusCode || 400).send(error.message)
        }
    }

}