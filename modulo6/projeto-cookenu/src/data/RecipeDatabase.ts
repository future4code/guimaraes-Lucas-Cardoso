import { recipe } from "../model/recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase {

    private static TABLE_NAME = 'cookenu_recipes'

    public insertRecipe = async ({id, title, description, authorId}: recipe): Promise<void> => {
        try {
            await RecipeDatabase.connection(RecipeDatabase.TABLE_NAME)
            .insert({
                id,
                title,
                description,
                author_id: authorId
            })
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }

    public getRecipe = async (id: string): Promise<recipe> => {
        try {
            return await RecipeDatabase.connection(RecipeDatabase.TABLE_NAME)
            .select('*')
            .where({id})
            .first()
        }

        catch (error: any) {
            throw new Error(error.sqlMessage)
        }
    }
}