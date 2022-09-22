import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    width: 5.5vh;
    height: 5.5vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    span {
        color: var(--gray);
        font-size: 2.5vh;
        font-weight: 700;
    }
`

const NumberCard = ({ number }) => {
    return (
        <Container>
            <span>{number}</span>
        </Container>
    )
}

export default NumberCard