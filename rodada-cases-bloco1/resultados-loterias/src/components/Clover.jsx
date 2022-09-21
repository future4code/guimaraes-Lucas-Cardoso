import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    transform: ${props => props.invert ? 'scaleX(-1)' : null};
`

const Clover1 = styled.div`
    width: 40px;
    height: 26px;
    border-radius: 15px 0px 0px 15px;
    background-color: white;

`

const Clover2 = styled.div`
    width: 40px;
    height: 26px;
    border-radius: 13px 0px 0px 13px;
    background-color: white;
    rotate: 90deg;
    translate: 7px 20px;
`

const Clover = ({ invert }) => {
    return (
        <Container invert={invert} >
            <Clover2 />
            <Clover1 />
        </Container>
    )
}

export default Clover