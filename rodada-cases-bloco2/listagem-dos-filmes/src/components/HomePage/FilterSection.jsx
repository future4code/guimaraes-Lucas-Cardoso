import { useState } from 'react'
import styled from 'styled-components'
import FilterCard from './FilterCard'
import SearchBar from './SearchBar'

const Container = styled.section`
    background-color: var(--dark);
    color: #dfdfdf;
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

    const changeText = (status) => {
        if (status) {
            return 'Ver menos'
        } else {
            return 'Ver mais'
        }
    }

    const handleClick = () => {
        setShowMore({
            status: !showMore.status,
            text: changeText(!showMore.status)
        })
    }

    return (
        <Container showMore={showMore}>
            <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já!</h1>
            <SearchBar />
            <Filters>
                <p className='filter'>FILTRE POR:</p>
                <FiltersContainer showMore={showMore}>
                    <div>
                        <FilterCard name={'Ação'} />
                        <FilterCard name={'Aventura'} />
                        <FilterCard name={'Animação'} />
                        <FilterCard name={'Comédia'} />
                        <FilterCard name={'Crime'} />
                        <FilterCard name={'Documentário'} />
                        <FilterCard name={'Drama'} />
                        <FilterCard name={'Família'} />
                        <FilterCard name={'Fantasia'} />
                        <FilterCard name={'História'} />
                        <FilterCard name={'Terror'} />
                        <FilterCard name={'Música'} />
                        <FilterCard name={'Mistério'} />
                        <FilterCard name={'Romance'} />
                        <FilterCard name={'Ficção científica'} />
                        <FilterCard name={'Cinema TV'} />
                        <FilterCard name={'Suspense'} />
                        <FilterCard name={'Guerra'} />
                        <FilterCard name={'Faroeste'} />
                    </div>
                </FiltersContainer>
                <Button onClick={handleClick}>{showMore.text}</Button>
            </Filters>
        </Container>
    )
}

export default FilterSection