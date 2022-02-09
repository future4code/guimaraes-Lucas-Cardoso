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

const Form1 = ({ setEnsino, buttonStage }) => {
    const onClick = () => {
        setEnsino(document.getElementById("ensino").value)
        buttonStage()
    }

    return (
        <Container>
            <h3>ETAPA 1 - DADOS GERAIS</h3>
            <div>
                <span>1. Qual o seu nome?</span>
                <input />
            </div>
            <div>
                <span>2. Qual sua idade?</span>
                <input />
            </div>
            <div>
                <span>3. Qual seu e-mail?</span>
                <input />
            </div>
            <div>
                <span>4. Qual a sua escolaridade?</span>
                <select id="ensino">
                    <option value="medio">Ensino médio incompleto</option>
                    <option value="medio">Ensino médio completo</option>
                    <option value="superior">Ensino superior incompleto</option>
                    <option value="superior">Ensino superior completo</option>
                </select>
            </div>
            <button onClick={onClick}>Próxima etapa</button>
        </Container>
    )
}

export default Form1