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

}