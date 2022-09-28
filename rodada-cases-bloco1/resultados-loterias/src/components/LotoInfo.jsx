import styled from 'styled-components'
import { useLottery } from '../provider'
import LotoIcon from './LotoIcon'
import Select from './Select'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 48vh;

    select {
        margin: 2.5rem 0px 5% 0px;
    }

    .iconContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        margin: 0;
        color: white;
        font-weight: 600;
        text-transform: uppercase;
    }

    p {
        padding: 3%;
        color: white;
        font-size: 15px;
    }
`

const LotoInfo = () => {
    const { lotteries, selectedLottery } = useLottery()

    const [ lotteryName ] = lotteries.filter(lottery => lottery.id === selectedLottery.loteria)

    return (
        <Container>
            <Select />
            <div className='iconContainer'>
                <LotoIcon />
                <h1>{lotteryName?.nome}</h1>
            </div>
            <p>CONCURSO Nº {selectedLottery?.id}</p>
        </Container>
    )
}

export default LotoInfo