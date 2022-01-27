import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 75px;

    img {
        width: 33px;
        margin-right: 10px;
        border-radius: 50%;
    }
`

function CardPequeno(props) {
    return (
        <Container>
            <img src={ props.imagem } />
            <p><strong>{ props.infoTitle }</strong>: { props.info }</p>
        </Container>
    )
}

export default CardPequeno;