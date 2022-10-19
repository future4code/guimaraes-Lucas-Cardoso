import { useState } from 'react'
import styled from 'styled-components'
import { UseMovieProvider } from '../providers/GetMovieProvider'
import { usePage } from '../providers/PageProvider'
import PageCard from './PageCard'

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const PagesContainer = styled.div`
    margin: 2.5rem;
    display: flex;
`

const ArrowContainer = styled.div`
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
        font-weight: 500;
    }
`

const Page = () => {
    const { pages, currentPage, updatePages } = usePage()
    const { getMovies } = UseMovieProvider()

    return (
        <Container>
            <PagesContainer>

                <ArrowContainer onClick={() => {
                    updatePages(1)
                    getMovies(1)
                }}>
                    <span>{'<<'}</span>
                </ArrowContainer>

                {pages.map(page => (
                    <PageCard
                        number={page}
                        currentPage={currentPage}
                        updatePages={updatePages}
                        key={page} />
                ))}

                <ArrowContainer onClick={() => {
                    updatePages(500)
                    getMovies(500)
                }}>
                    <span>{'>>'}</span>
                </ArrowContainer>

            </PagesContainer>
        </Container>
    )
}

export default Page