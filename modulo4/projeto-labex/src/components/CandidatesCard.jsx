import styled from 'styled-components'
import Button from '../components/Button'
import Button2 from '../components/Button2'

const Container = styled.div`
    padding: 20px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color: #5656563b;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    
    span {
        color: white;
        font-weight: 200;
        margin: 3px;
    }
`

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
        padding: 12px;
        width: 47%;
    }
`

const CandidatesCard = (props) => {

    return (
        <Container>
            <Info>
                <span><b>Nome:</b> {props.name}</span>
                <span><b>Idade:</b> {props.age}</span>
                <span><b>Profissão:</b> {props.job}</span>
                <span><b>Texto de candidatura:</b> {props.text}</span>
            </Info>
            <ButtonContainer>
                <Button2 onClick={() => props.decideCandidate(props.id, false)}>Reprovar</Button2>
                <Button onClick={() => props.decideCandidate(props.id, true)}>Aprovar</Button>
            </ButtonContainer>
        </Container>
    )
}

export default CandidatesCard