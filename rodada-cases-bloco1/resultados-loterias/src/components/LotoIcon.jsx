import styled from 'styled-components'
import Clover from './Clover'

const Container = styled.div`
`

const Pair = styled.div`
    display: flex;
    transform: ${props => props.invert ? 'scaleY(-1)' : null};
    
    div {
        margin: 1px;
    }
`

const LotoIcon = () => {
    return (
        <Container>
            <Pair>
                <Clover />
                <Clover invert />
            </Pair>
            <Pair invert>
                <Clover />
                <Clover invert />
            </Pair>
        </Container>
    )
}

export default LotoIcon