import { RecipeDatabase } from "../data/RecipeDatabase";
import { CustomError } from "../error/CustomError";
import { InvalidRequest } from "../error/InvalidRequest";
import { RecipeNotFound } from "../error/RecipeNotFound";
import { UserNotFound } from "../error/UserNotFound";
import { recipeInput, recipe, getRecipe } from "../model/recipe";
import IdGenerator from "../services/IdGenerator";
import { TokenGenerator } from "../services/TokenGenerator";

export class RecipeBusiness {

    public postRecipe = async (input: recipeInput): Promise<void> => {
        try {
            const { title, description, token } = input

            if (!title || !description || !token) throw new InvalidRequest()
    
            const userData = new TokenGenerator().tokenData(token)
    
            const id = IdGenerator.generateId()
    
            const recipe: recipe = {
                id,
                title,
                description,
                authorId: userData.id
            }
    
            await new RecipeDatabase().insertRecipe(recipe)
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
        
    }

    public getRecipe = async ({id, token}: getRecipe): Promise<recipe> => {
        try {
            if (!id) throw new InvalidRequest()

            new TokenGenerator().tokenData(token)

            const result = await new RecipeDatabase().getRecipe(id)

            if (!result) throw new RecipeNotFound()

            return result
        }

        catch (error: any) {
            throw new CustomError(error.message, error.statusCode)
        }
    }
}