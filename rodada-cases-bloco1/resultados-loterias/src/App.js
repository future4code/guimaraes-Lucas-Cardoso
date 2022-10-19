import { useEffect, useState } from 'react'
import styled from 'styled-components'
import LotoInfo from './components/LotoInfo'
import LotoResults from './components/LotoResults'
import { useLottery } from './provider'

const Container = styled.div`
    background-color: ${props => props.backgroundColor || '#6BEFA3'};
    transition: all 0.25s ease;
    
    @media (min-width: 1200px) {
        display: flex;
        width: 100%;
    }
`

const App = () => {
    const [backgroundColor, setBackgroundColor] = useState('#6BEFA3')

    const { getContestWithId, selectedLottery } = useLottery()

    const updateBackground = () => {
        switch (selectedLottery.loteria) {
            case 0:
                setBackgroundColor('#6BEFA3')
                break
            case 1:
                setBackgroundColor('#8666EF')
                break
            case 2:
                setBackgroundColor('#DD7AC6')
                break
            case 3:
                setBackgroundColor('#FFAB64')
                break
            case 4:
                setBackgroundColor('#5AAD7D')
                break
            case 5:
                setBackgroundColor('#BFAF83')
                break
        }
    }

    useEffect(() => {
        getContestWithId(0)
    }, [])

    useEffect(() => {
        updateBackground()
    }, [selectedLottery])

    return (
        <>
        <Container backgroundColor={backgroundColor}>
            <LotoInfo />
            <LotoResults />
        </Container>
        </>
    )
}

export default App