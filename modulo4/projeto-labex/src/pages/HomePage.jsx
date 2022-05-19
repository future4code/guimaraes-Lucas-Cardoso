import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Wallpaper from '../images/wallpaper.png'
import Button from '../components/Button'
import Button2 from '../components/Button2'

const Container = styled.div`
    width: 100%;
    overflow: hidden;
    height: calc(100vh - 60px);

    img {
        max-width: 100%;
        z-index: 0;
    }
`

const Info = styled.div`
    z-index: 1;
    position: absolute;
    color: white;
    max-width: 550px;
    top: 40%;
    left: 25%;
    transform: translate(-25%, -40%);
    text-align: center;

    h1 {
        font-weight: 400;
        font-size: 50px;
    }

    p {
        font-size: 20px;
    }

    div {
        display: flex;
    }
`

const HomePage = () => {
    const navigate = useNavigate()

    const goToProtectedPage = (page) => {
        const token = localStorage.getItem('token')
        if (token === null) {
            navigate('/login')
        } else {
            navigate(page)
        }
    }

    return (
        <>
        <Container>
            <Info>
                <h1>LabeX Viagens</h1>
                <p>
                    A LabeX disponibiliza os melhores serviços de viagem espacial,
                    além dos melhores preços. Para começar clique AQUI ou no botão
                    abaixo “Ver Viagens” e faça sua inscrição para sua viagem dos sonhos.
                </p>
                <div>
                    <Button onClick={() => navigate("/trips/list")}>List Trips Page</Button>
                    <Button2 onClick={() => goToProtectedPage("/admin/trips/list")}>Admin Home Page</Button2>
                </div>
            </Info>
            <img src={Wallpaper} alt="Wallpaper" className='background' />
        </Container>
        </>
    )
}

export default HomePage