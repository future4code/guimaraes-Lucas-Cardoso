import { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilterCard from '../FilterCard'
import SearchBar from './SearchBar'

const Container = styled.section`
    background-color: var(--mainBackground);
    color: var(--textColor);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: auto;
    padding: 80px 0px 40px 0px;

    @media (max-width: 800px) {
        padding: 40px 0px 10px 0px;
    }

    h1 {
        max-width: 700px;
        width: 90%;
        font-size: 35px;
        text-align: center;
        font-weight: 500;
        text-shadow: 0px -1px 20px black;

        @media (max-width: 800px) {
            font-size: 1.6rem;
        }
    }

    input {
        margin: 25px;
    }
`

const Filters = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .filter {
        text-align: center;
        text-shadow: 0px -1px 20px black;
        font-size: 14px;
        padding-bottom: 5px;
    }
`

const FiltersContainer = styled.div`
    overflow-y: hidden;

    div {
        display: flex;
        margin: 6px;
        justify-content: center;
        max-width: 1200px;
        max-height: ${props => props.showMore.status ? 'auto' : '100px'};
        flex-wrap: wrap;
    }
`

const Button = styled.button`
    display: none;
    padding: 15px 80px;
    margin: 15px;
    background-color: #06060693;
    color: white;
    border-radius: 3px;

    :active {
        background-color: black;
    }

    @media (max-width: 1062px) {
        display: initial;
    }
`

const FilterSection = () => {
    const [showMore, setShowMore] = useState({status: false, text: 'Ver mais'})
    const [genres, setGenres] = useState([])

    const changeText = (status) => {
        if (status) {
            return 'Ver menos'
        } else {
            return 'Ver mais'
        }
    }

    const fetchGenres = () => {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=17786cb3ca807acdb38ed5390c4eefdb&language=pt-BR`)
        .then(res => res.json())
        .then(res => setGenres(res.genres))
    }

    const handleClick = () => {
        setShowMore({
            status: !showMore.status,
            text: changeText(!showMore.status)
        })
    }

    useEffect(() => {
        fetchGenres()
    }, [])

    return (
        <Container showMore={showMore}>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</h1>
            <SearchBar />
            <Filters>
                <p className='filter'>FILTRE POR:</p>
                <FiltersContainer showMore={showMore}>
                    <div>
                        {genres.map((item, index) => (
                            <FilterCard key={index} name={item.name} />
                        ))}
                    </div>
                </FiltersContainer>
                <Button onClick={handleClick}>{showMore.text}</Button>
            </Filters>
        </Container>
    )
}

export default FilterSection