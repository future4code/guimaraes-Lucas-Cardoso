import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Container = styled.div`

`

const LoginPage = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleChange = (e, callback) => {
        callback(e.target.value)
    }

    const login = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucas-cardoso-guimaraes/login`

        const body = {
            email: email,
            password: password,
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
            <h2>Login</h2>
            <input
                value={email}
                onChange={(e) => handleChange(e, setEmail)}
                placeholder='E-mail'
            />
            <input
                value={password}
                onChange={(e) => handleChange(e, setPassword)}
                placeholder='Senha'
                type="password"
            />
            <button onClick={login}>Entrar</button>
        </Container>
    )
}

export default LoginPage