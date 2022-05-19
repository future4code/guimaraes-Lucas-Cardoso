import styled from 'styled-components'

const Container = styled.footer`
    div {
        background-color: var(--background);
        height: 100px;
    }

    width: 100%;
    height: 250px;
    background-color: #151212;
`

const Footer = () => {
    return (
        <Container>
            <div />
        </Container>
    )
}

export default Footer