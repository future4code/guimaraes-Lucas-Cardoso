import React from "react";
import styled from 'styled-components'

const ButtonContainer = styled.button`
    font-family: 'Ruda', sans-serif;
    width: 135px;
    height: 50px;
    border-radius: 25px;
    background-color: ${props => props.color1};
    color: ${props => props.color2};
    font-size: 1.15rem;
    border: none;
    transition: background-color 0.75s ease;
    font-weight: bold;
    :hover {
        background-color: ${props => props.color2};
        color: ${props => props.color1};
        transition: color 0.6s ease;
    }
`

const Button = ({ text, color1, color2 }) => {
    return (
        <ButtonContainer color1={color1} color2={color2} >
            {text}
        </ButtonContainer>
    )
}

export default Button