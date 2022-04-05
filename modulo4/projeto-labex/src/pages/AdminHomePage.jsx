import styled from 'styled-components'
import useProtectedPage from '../hooks/useProtectedPage'

const Container = styled.div`

`

const AdminHomePage = () => {
    useProtectedPage()

    return (
        <Container>
            Admin Home Page
        </Container>
    )
}

export default AdminHomePage