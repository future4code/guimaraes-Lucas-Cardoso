import React from 'react'
import styled from 'styled-components'
import SpeakerLogo from '../../images/speakers.png'
import Button from '../Button'

const Container = styled.header`
    background-color: var(--main-color);
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 1.25rem;
`

const Space = styled.div`
    width: 33%;
`

const Logo = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75px;

    img {
        max-height: 70%;
        margin-right: 7px;
        filter: invert(1);
    }

    h1 {
        font-size: 45px;
        margin-left: 7px;
        color: white;
    }
`

const Login = styled.div`
    width: 33%;
    display: flex;
    justify-content: flex-end;

    > * {
        margin: 0px 10px;
    }
`

const Header = () => {
    return (
        <Container>
            <Space></Space>
            <Logo>
                <img src={SpeakerLogo} alt="Logo" />
                <h1>Labefy</h1>
            </Logo>
            <Login>
                <Button text="Registrar-se" color1="var(--secundary-color)" color2="white" />
                <Button text="Login" color1="white" color2="var(--secondary-color)" />
            </Login>
        </Container>
    )
}

export default Header