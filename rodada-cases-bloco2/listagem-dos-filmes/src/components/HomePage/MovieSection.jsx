import { useEffect } from 'react'
import styled from 'styled-components'
import { UseMovieProvider } from '../../providers/GetMovieProvider'
import Loading from '../Loading'
import MovieCard from './MovieCard'

const Container = styled.main`
    display: grid;
    grid-gap: 30px;
    padding: 25px;
    max-width: 1366px;
    margin: auto;

    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr)
    }

    @media (min-width: 960px) {
        grid-template-columns: repeat(4, 1fr)
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(5, 1fr)
    }
`

const MovieSection = () => {
    const { movies, getMovies, loading } = UseMovieProvider()

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <Container>
            {loading ? (
                <Loading />
            ) : (
               <>
                {movies.results?.map((movie, index) => (
                <MovieCard movie={movie} key={index} />
                ))}
               </> 
            )}
            
        </Container>
    )
}

export default MovieSection