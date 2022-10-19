import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    cursor: pointer;

    :hover {
        h3 {
            color: #585858;
            transition: 0.25s ease all;
        }

        p {
            color: #808080;
            transition: 0.25s ease all;
        }

        img {
            filter: opacity(95%);
            transition: 0.15s ease all;
        }
    }

    img {
        border-radius: 3px;
        display: block;
        width: 100%;
        max-width: 100%;
    }

    h3 {
        font-size: 18px;
        margin: 0.5rem 0rem;
        letter-spacing: -0.5px;
        font-weight: 700;
    }

    p {
        font-size: 15px;
        font-weight: 700;
        color: #6b6b6b;
    }
`

const MovieCard = ({ movie }) => {
    const navigate = useNavigate()

    const convertMonth = (date) => {
        const onlyMonth = date.slice(5, 7)
        switch (onlyMonth) {
            case '01':
                return 'JAN'
            case '02':
                return 'FEV'
            case '03':
                return 'MAR'
            case '04':
                return 'ABR'
            case '05':
                return 'MAI'
            case '06':
                return 'JUN'
            case '07':
                return 'JUL'
            case '08':
                return 'AGO'
            case '09':
                return 'SET'
            case '10':
                return 'OUT'
            case '11':
                return 'NOV'
            case '12':
                return 'DEZ'
            default:
                return ''
        }
    }

    const newDate = `${movie.release_date.slice(-2)} ${convertMonth(movie.release_date)} ${movie.release_date.slice(0, 4)}`  

    return (
        <Container onClick={() => navigate(`/filme/${movie.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{newDate}</p>
        </Container>
    )
}

export default MovieCard