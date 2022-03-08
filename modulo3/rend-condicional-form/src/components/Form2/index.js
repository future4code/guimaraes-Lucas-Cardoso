import styled from "styled-components";

const Container = styled.div`
    div {
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            width: 170px;
        }

        > * {
            margin: 6px;
        }
    }

    button {
        margin-top: 20px;
    }
`

const Form2 = ({ buttonStage }) => {
    return (
        <Container>
            <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
            <div>
                <span>5. Qual curso?</span>
                <input />
            </div>
            <div>
                <span>6. Qual a unidade de ensino?</span>
                <input />
            </div>
            <button onClick={buttonStage}>Próxima etapa</button>
        </Container>
    )
}

export default Form2