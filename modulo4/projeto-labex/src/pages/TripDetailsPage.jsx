import styled from 'styled-components'
import useProtectedPage from '../hooks/useProtectedPage'

const Container = styled.div`

`

const TripDetailsPage = () => {
    useProtectedPage()

    return (
        <Container>
            Trip Details Page
        </Container>
    )
}

export default TripDetailsPage