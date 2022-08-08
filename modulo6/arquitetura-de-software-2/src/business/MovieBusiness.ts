import { MovieDatabase } from "../data/MovieDatabase"
import { Movie } from "../types/Movie"
import { v4 as generateId } from 'uuid'

export class MovieBusiness {
    public create = async (input: any) => {
        const { title, description, duration_in_minutes, year_of_release } = input

        if (!title || !description || !duration_in_minutes || !year_of_release) {
            throw new Error('Informações no body incorretas, checar documentação')
        }

        if (typeof title != 'string') throw new Error('O nome deve ser uma string')
        if (typeof description != 'string') throw new Error('A descrição deve ser uma string')
        if (typeof duration_in_minutes != 'number') throw new Error('A duração do filme deve ser um número')
        if (typeof year_of_release != 'number') throw new Error('O ano de lançamento deve ser um número')

        const newMovie = new Movie(
            generateId(),
            title,
            description,
            duration_in_minutes,
            year_of_release
        )

        await new MovieDatabase().create(newMovie)
    }

    public getAll = async () => {
        return await new MovieDatabase().getAll()
    }
}