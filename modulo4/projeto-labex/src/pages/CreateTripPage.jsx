import styled from 'styled-components'
import useProtectedPage from '../hooks/useProtectedPage'

const Container = styled.div`

`

const CreateTripPage = () => {
    useProtectedPage()

    return (
        <Container>
            Create Trip Page
        </Container>
    )
}

export default CreateTripPage