import styled from 'styled-components'
import FilterSection from '../components/HomePage/FilterSection'
import MovieSection from '../components/HomePage/MovieSection'
import Page from '../components/Page'

const Container = styled.div`

`

const Home = () => {
    return (
        <Container>
            <FilterSection />
            <MovieSection />
            <Page />
        </Container>
    )
}

export default Home