import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import wallpaper from '../images/wallpaper-no-shuttle.png'
import useForm from '../hooks/useForm'
import Input from '../components/Input'
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
    max-width: 800px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h2 {
        font-size: 35px;
    }

    form {
        display: flex;
        flex-direction: column;

        > * {
            margin: 10px 0px;
        }
        
        input {
            margin: 10px;
        }

        button {
            padding: 20px;
            margin: 10px;
        }

        div {
            display: flex;
            justify-content: space-between;
        }
    }
`

const LoginPage = () => {
    const navigate = useNavigate()

    const [form, onChangeForm] = useForm({
        email: "",
        password: "",
    })

    const login = (e) => {
        e.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/login`

        const body = {
            email: form.email,
            password: form.password,
        }

        axios
            .post(url, body)
            .then((res) => {
                localStorage.setItem('token', res.data.token)
                navigate('/admin/trips/list')
            })
            .catch(() => alert("E-mail ou senha inválidos"))
    }

    useEffect(() => {
        const token = localStorage.getItem('token')

        if (token !== null) {
            navigate('/')
        }
    }, [])

    return (
        <Container>
            <Info>
                <h2>Login</h2>
                <form onSubmit={login}>
                    <Input
                        value={form.email}
                        onChange={(e) => onChangeForm(e)}
                        placeholder='E-mail'
                        name="email"
                        type="email"
                        required
                    />
                    <Input
                        value={form.password}
                        onChange={(e) => onChangeForm(e)}
                        placeholder='Senha'
                        type="password"
                        name="password"
                        required
                    />
                    <div>
                        <Button2 type="button" onClick={() => navigate("/")}>Voltar</Button2>
                        <Button type="submit">Entrar</Button>
                    </div>
                </form>
            </Info>
            <img src={wallpaper} alt="Wallaper" />
        </Container>
    )
}

export default LoginPage