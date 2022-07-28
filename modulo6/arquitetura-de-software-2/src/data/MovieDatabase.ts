import { Movie } from "../types/Movie";
import { BaseDatabase } from "./BaseDatabase";
import { v4 as generateId } from 'uuid'

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE";

    public create = async (movie: Movie): Promise<void> => {
        await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
        .insert({
            id: movie.getId(),
            title: movie.getTitle(),
            description: movie.getDescription(),
            duration_in_minutes: movie.getDuration_in_minutes(),
            year_of_release: movie.getYear_of_release()
        })
    }

    public getAll = async () => {
        return await MovieDatabase.connection(MovieDatabase.TABLE_NAME)
        .select('*')
    }
}