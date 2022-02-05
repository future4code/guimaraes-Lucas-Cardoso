import styled from "styled-components"
import { useState } from "react"

const Container = styled.div`
    width: calc(100% + 33px);
    display: flex;
`

const StyledInput = styled.input`
    width: ${props => props.size};
    border: none;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 6px 24px 0px, rgba(0, 0, 0, 0.16) 0px 0px 0px 1px;
    height: 45px;
    padding-left: 10px;

    :focus {
        outline: none;
    }
`

const Button = styled.div`
    width: 20%;
    background-color: #55bcddcc;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #5bcdf1cc;
        transition: background-color 0.2s ease;
    }
`

const Input = ({ messages, setMessages }) => {
    const [nameInput, setNameInput] = useState("")
    const [textInput, setTextInput] = useState("")

    const pushMessages = () => {
        let newMessage = {
            name: nameInput,
            text: textInput,
        }

        let newMessages = [newMessage, ...messages]

        setMessages(newMessages)

        setNameInput("")
        setTextInput("")
    }

    return (
        <Container>
            <StyledInput
                size="20%"
                placeholder="Usuário"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
            />
            <StyledInput
                size="60%"
                placeholder="Mensagem"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
            />
            <Button onClick={pushMessages}>Enviar</Button>
        </Container>
    )
}

export default Input