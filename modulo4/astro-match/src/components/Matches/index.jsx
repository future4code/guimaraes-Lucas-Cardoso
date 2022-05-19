import styled from 'styled-components'
import MatchesCard from '../MatchesCard'

const Container = styled.div`
    padding: 15px;
    overflow-y: auto;
`

function Matches ({ matches }) {
    return (
        <Container>
            {matches.map((item, index) => {
                return (
                    <MatchesCard
                        img={item.photo}
                        name={item.name}
                        key={index}
                    />
                )
            })}
        </Container>
    )
}

export default Matches