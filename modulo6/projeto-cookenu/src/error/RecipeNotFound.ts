import { CustomError } from "./CustomError";

export class RecipeNotFound extends CustomError {
    constructor() {
        super ('Receita não encontrada', 404)
    }
}