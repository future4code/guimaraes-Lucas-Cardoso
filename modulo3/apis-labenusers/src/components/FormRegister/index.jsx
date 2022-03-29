import { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useEffect } from 'react'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 390px;
    padding-top: 10px;
    padding-bottom: 20px;
    background-color: #212429;
    border-radius: 10px;
    margin: auto;
    box-shadow: 0px 0px 25px 0px #00000040;

    h2 {
        font-size: 35px;
        color: white;
        text-transform: uppercase;
        font-weight: 100;
        letter-spacing: 1px;
        margin: 10px;
    }

    div {
        display: flex;
        flex-direction: column;
    }

    div .error {
        height: 12px;
        color: #df1b1bc4;
        font-size: 12px;
        padding-top: 1px;
        padding-bottom: 3px;
        margin: auto;
    }
    
    form {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    span {
        color: #a9a9a9;
        margin-bottom: 5px;
    }

    input {
        background-color: #32353c;
        width: 290px;
        height: 25px;
        border: none;
        border-radius: 2px;
        padding: 10px;
        font-size: 15px;
        color: #dadada;
    }

    .textInput.err {
        box-shadow: 0px 0px 3px 0px #e50000cc;
    }

    input:focus {
        outline: none;
    }

    .checkbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 300px;
        margin-top: 6px;
    }

    .checkbox input {
        width: 15px;
        margin: 0;
        margin-right: 5px;
    }

    button {
        width: 270px;
        height: 40px;
        border: none;
        background: linear-gradient( to right, #47bfff 5%, #385ed2 60%);
        border-radius: 3px;
        color: white;
        cursor: pointer;
        font-size: 15px;
        margin-top: 25px;
    }

    button:hover {
        background: linear-gradient( to right,#76caff 5%,#2f62ff 60%);
    }

    .passwordReset {
        color: white;
        font-size: 15px;
        padding-top: 30px;
        cursor: pointer;
    }

    .passwordReset:hover {
        color: #8cd7ff;
    }

    @media (max-width: 415px) {
        width: 300px;

        input {
            width: 230px;
            height: 15px;
        }

        .checkbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 230px;
        }

        button {
            width: 230px;
        }
    }
`

const FormRegister = ({ setUsers }) => {
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")

    const apiUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
    const headers = {
        headers: {
          Authorization: "lucas-cardoso-guimaraes"
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    const getUsers = async () => {
        try {
            const response = await axios.get(apiUrl, headers)
            setUsers(response.data)
        } catch (err) {
            console.log(err.response.data)
        }
    }

    const createUser = async () => {
        const body = {
            name: nameInput,
            email: emailInput
        }

        try {
            await axios.post(apiUrl, body, headers)
            alert(`Usuário ${body.name} criado com sucesso!`)
            getUsers()
        } catch (err) {
            console.log(err.response.data)
        }
    }

    return (
        <Container>
            <h2>Cadastrar</h2>

            <form className="form">

            <div>
                <span>Nome</span>
                <input
                    className="textInput"
                    type="text"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    />
                <div className="error"></div>
            </div>

            <div>
                <span>E-mail</span>    
                <input 
                    className="textInput"
                    type="text"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    />
                <div className="error"></div>
            </div>

            <div className="checkbox">
                <input type="checkbox"/>
                <span>Lembrar-me neste dispositivo</span>
            </div>

            <button type="button" onClick={createUser}>Cadastrar</button>
          </form>

            <span className="passwordReset">Esqueceu sua senha?</span>

        </Container>
    )
}

export default FormRegister