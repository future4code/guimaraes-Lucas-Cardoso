import styled from 'styled-components'

const Container = styled.header`
    background-color: var(--main-color);
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    h2 {
        font-weight: 300;
        font-size: 25px;
    }
`

const Header = () => {
    return (
        <Container>
            <h2>LabeX</h2>
        </Container>
    )
}

export default Header