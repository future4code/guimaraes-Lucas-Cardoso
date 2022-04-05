import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import Wallpaper from '../images/wallpaper.png'
import { useEffect } from 'react'

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

        button {
            margin: 10px;
            background-color: white;
            color: black;
            border: 1px solid white;
            width: 250px;
            padding: 25px;
            border-radius: 35px;
            font-size: 16px;
            transition: all 0.2s ease;

            :hover {
                background-color: transparent;
                color: white;
            }
        }

        .altButton {
            background-color: transparent;
            color: white;

            :hover {
                background-color: white;
                color: black;
            }
        }
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
                    <button onClick={() => navigate("/trips/list")}>List Trips Page</button>
                    <button onClick={() => goToProtectedPage("/admin/trips/list")}>Admin Home Page</button>
                </div>
            </Info>
            <img src={Wallpaper} alt="Wallpaper" className='background' />
        </Container>
        </>
    )
}

export default HomePage