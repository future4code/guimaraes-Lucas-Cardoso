import styled from 'styled-components'

const Container = styled.button`
    background-color: white;
    border: 1px solid ${props => props.color};
    color: ${props => props.color};
    border-radius: 50%;
    font-size: 40px;
    width: 75px;
    height: 75px;
    transition: all 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    
    :hover {
        width: 82px;
        height: 82px;
        background-color: ${props => props.color};
        color: white;
        box-shadow: none;
    }

    :active {
        width: 72px;
        height: 72px;
        filter: brightness(75%);
        transition: width 0.1s ease, height 0.1s ease;
    }
`

function Button ({ text, color, choosePerson }) {
    return (
        <Container color={color} onClick={choosePerson}>
            {text}
        </Container>
    )
}

export default Button