import styled from 'styled-components'
import useProtectedPage from '../hooks/useProtectedPage'
import wallpaper from '../images/wallpaper-no-shuttle.png'

const Container = styled.div`
    background-color: #120c0c;
    min-height: calc(100vh - 60px);
    color: var(--main-color);
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin: 0;
        padding: 2%;
        font-size: 40px;
        text-align: center;
        font-weight: 300;
    }

`

const CardContainer = styled.div`
    background-color: #0c0809;
    width: 80%;
    height: calc(75vh - 60px);
    border-radius: 15px;
    box-shadow: #8e753919 0px 2px 10px 0px;
    padding: 20px;
`

const AdminHomePage = () => {
    useProtectedPage()

    return (
        <>
        <Container>
            <h1>Painel Administrativo</h1>
            <CardContainer>
                teste
            </CardContainer>
        </Container>
        </>
    )
}

export default AdminHomePage