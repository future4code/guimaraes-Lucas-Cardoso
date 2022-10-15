import { createContext, useContext, useState } from "react";

const GetMovieContext = createContext()

const GetMovieProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const getMovies = (page) => {
        setLoading(true)

        try {

            fetch(`https://api.themoviedb.org/3/movie/popular?api_key=17786cb3ca807acdb38ed5390c4eefdb&language=pt-BR&page=${page}`)
            .then(res => res.json())
            .then(res => setMovies(res))
            .then(res => setLoading(false))
        }

        catch (error) {
            console.log(error)
        }
    }

    return (
        <GetMovieContext.Provider value={{
            loading,
            movies,
            getMovies
        }}>
            {children}
        </GetMovieContext.Provider>
    )
}

export const UseMovieProvider = () => useContext(GetMovieContext)

export default GetMovieProvider