import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`

`

const HomePage = () => {
    const navigate = useNavigate()
    const goToPage = (page) => {
        navigate(page)
    }

    return (
        <Container>
            <button onClick={() => goToPage("/trips/list")}>List Trips Page</button>
            <button onClick={() => goToPage("/admin/trips/list")}>Admin Home Page</button>
        </Container>
    )
}

export default HomePage