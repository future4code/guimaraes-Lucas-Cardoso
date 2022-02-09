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

const Form3 = ({ buttonStage }) => {
    return (
        <Container>
            <h3>ETAPA 2 - INFORMAÇÕES GERAIS DE ENSINO</h3>
            <div>
                <span>5. Por que você não terminou um curso de graduação?</span>
                <input />
            </div>
            <div>
                <span>6. Você fez algum curso complementar?</span>
                <select id="ensino">
                    <option>Nenhum</option>
                    <option>Curso técnico</option>
                    <option>Curso de inglês</option>
                </select>
            </div>
            <button onClick={buttonStage}>Próxima etapa</button>
        </Container>
    )
}

export default Form3