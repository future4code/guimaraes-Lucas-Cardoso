import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import FilterCard from '../FilterCard'
import Loading from '../Loading'
import UserScore from './UserScore'

const Container = styled.main`
    padding: 0rem 1rem;
    display: flex;
    max-width: 1366px;
    margin: auto;

    @media (max-width: 900px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        padding: 0rem 1rem;

        img {
            transform: none;
            margin-bottom: 50px;
        }
    }

    img {
        transform: translateY(50px);
        max-width: 100%;
        width: 400px;
    }
`

const Background = styled.div`
    background-color: var(--mainBackground);
    color: var(--textColor);
`

const InfoContainer = styled.div`
    margin: 50px;

    @media (max-width: 900px) {
        margin: 10px;
    }

    > * {
        margin-bottom: 15px;
    }
`

const GenreContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > div {
        margin-right: 10px;
        margin-bottom: 5px;
        cursor: initial;
    }
`

const UserScoreContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    > div {
        margin-right: 10px;
        cursor: initial;
    }

    span {
        max-width: 200px;
        font-size: 18px;
        margin-left: 10px;
    }
`

const MainInfo = () => {
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(false)
    
    const path = useLocation().pathname.slice(7)

    const fetchMovie = async (movieId) => {
        setLoading(true)

        try {
            fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17786cb3ca807acdb38ed5390c4eefdb&language=pt-BR`)
                .then(res => res.json())
                .then(res => setMovie(res))
                .then(res => setLoading(false))
        }

        catch (error) {
            console.log(error)
        }
    }

    const convertDate = (date) => {
        return `${date?.slice(-2)}/${date?.slice(5, 7)}/${date?.slice(0, 4)}`
    }

    const convertRunTime = (time) => {
        if (time < 60) {
            return `${time}m`
        }

        if (time === 60) {
            return `1h`
        }

        const hour = String(time/60)?.slice(0, 1)
        const minutes = String(time/60)?.slice(2, 5) * 0.06

        return `${hour}h ${Math.round(minutes)}m`
    }

    console.log(movie)

    useEffect(() => {
        fetchMovie(path)
    }, [])

    return (
        <>
        {loading ? (
            <Loading />
        ) : (
            <Background>

                <Container>

                    <picture>
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    </picture>

                    <InfoContainer>

                        <h1>{movie.title}</h1>
                        <p>{movie.adult ? '18 anos' : 'Livre'} • {convertDate(movie?.release_date)} • {convertRunTime(movie?.runtime)}</p>

                        <GenreContainer>
                            {movie.genres?.map((genre, index) => (
                                <FilterCard index={index} name={genre.name} />
                                ))}
                        </GenreContainer>
                        
                        <UserScoreContainer>
                            <UserScore percent={Math.round(movie.vote_average * 10)} />
                            <span>Avaliação dos usuários</span>
                        </UserScoreContainer>

                    </InfoContainer>

                </Container>

            </Background>
        )}
        </>
    )
}

export default MainInfo