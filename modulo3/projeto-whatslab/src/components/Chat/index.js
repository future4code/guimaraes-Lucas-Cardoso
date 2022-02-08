import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 80vh;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 1rem;
`

const TextContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;

    div {
        margin: 20px;
        word-wrap: break-word;
    }
`

const Chat = ({ messages }) => {
    return (
        <Container>
            <TextContainer>
                {messages.map((item) => {
                    return (
                        <div><b>{item.name}:</b> {item.text}</div>
                    )
                })}
            </TextContainer>
        </Container>
    )
}

export default Chat