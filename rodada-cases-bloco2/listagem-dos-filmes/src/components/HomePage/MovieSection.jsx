import styled from 'styled-components'
import MovieCard from './MovieCard'

const Container = styled.main`
    display: grid;
    grid-gap: 40px;
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

    const movie = {
        adult:false,
        backdrop_path:"/5hoS3nEkGGXUfmnu39yw1k52JX5.jpg",
        genre_ids:[28,12,14],
        id:960704,
        original_language:"ja",
        original_title:"鋼の錬金術師 完結編 最後の錬成",
        overview:"The Elric brothers’ long and winding journey comes to a close in this epic finale, where they must face off against an unworldly, nationwide threat.",
        popularity:4030.287,
        poster_path:"/AeyiuQUUs78bPkz18FY3AzNFF8b.jpg",
        release_date:"2022-06-24",
        title:"Fullmetal Alchemist: The Final Alchemy",
        video:false,
        vote_average:6.7,
        vote_count:47
    }

    return (
        <Container>
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
            <MovieCard movie={movie} />
        </Container>
    )
}

export default MovieSection