import styled from 'styled-components'
import FilterSection from '../components/HomePage/FilterSection'
import MovieSection from '../components/HomePage/MovieSection'

const Container = styled.div`

`

const Home = () => {
    return (
        <Container>
            <FilterSection />
            <MovieSection />
        </Container>
    )
}

export default Home