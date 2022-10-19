import styled from 'styled-components'
import { UseMovieProvider } from '../providers/GetMovieProvider'

const PageContainer = styled.div`
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.active ? 'black' : 'gray'};
    cursor: pointer;
    transition: all 0.15s ease;

    @media (max-width: 500px) {
        width: 50px;
        height: 50px;
    }

    :hover {
        color: black;
    }

    span {
        font-size: 18px;
        font-weight: ${props => props.active ? '700' : '500'};
    }
`

const PageCard = ({ number, updatePages, currentPage }) => {
    const active = number === currentPage

    const { getMovies } = UseMovieProvider()

    const handleClick = () => {
        getMovies(number)
        updatePages(number)
    }

    return (
        <PageContainer onClick={handleClick} active={active}>
            <span>{number}</span>
        </PageContainer>
    )
}

export default PageCard