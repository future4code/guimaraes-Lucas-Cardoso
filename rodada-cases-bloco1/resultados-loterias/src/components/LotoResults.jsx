import styled from 'styled-components'
import { useLottery } from '../provider'
import NumberCard from './NumberCard'

const Container = styled.div`
    background-color: var(--light-gray);
    min-height: 52vh;
    width: 100%;
    border-radius: 50% 50% 0px 0px / 8% 8% 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 1200px) {
        min-height: 100vh;
        border-radius: 10% 0px 0px 10% / 50% 0px 0px 50%;

        display: grid;
        place-content: center;
        height: 100vh;
        margin: 0;

        div {
            justify-self: center;
        }

        p {
            justify-self: center;
            margin-bottom: 20px;
            position: sticky;
            top: 100vh;
        }
    }

    > div {
        padding: 2rem 0rem 1.5rem 0rem;
        width: 85%;
        margin: 1rem;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        align-content: center;
        justify-content: center;

        > div {
            margin: 0.8rem;
        }
    }

    p {
        color: black;
        text-align: center;
        font-weight: 500;
        color: var(--gray);
        max-width: 80%;
        font-size: 2vh;
        padding: 0px 0px 2rem 0px;
        margin: 0;
    }
`

const LotoResults = () => {
    const { selectedLottery } = useLottery()

    return (
        <Container>
            <div>
                {selectedLottery.numeros?.map((number, index) => (
                    <NumberCard key={index} number={number} />
                ))}
            </div>
            <p>Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.</p>
        </Container>
    )
}

export default LotoResults