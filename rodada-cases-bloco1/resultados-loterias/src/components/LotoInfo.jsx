import styled from 'styled-components'
import LotoIcon from './LotoIcon'
import Select from './Select'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 0px 50% 50% / 0px 0px 7% 7%;
    background-color: #6BEFA3;
    min-height: 48vh;

    select {
        margin: 10% 0px 5% 0px;
    }

    .iconContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        margin: 0;
        color: white;
        font-weight: bold;
    }

    p {
        padding: 3%;
        color: white;
        font-size: 15px;
    }
`

const LotoInfo = () => {
    return (
        <Container>
            <Select />
            <div className='iconContainer'>
                <LotoIcon />
                <h1>MEGA-SENA</h1>
            </div>
            <p>CONCURSO Nº 4560</p>
        </Container>
    )
}

export default LotoInfo