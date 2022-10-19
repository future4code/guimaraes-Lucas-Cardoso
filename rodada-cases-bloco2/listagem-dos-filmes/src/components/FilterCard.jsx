import styled from 'styled-components'

const Container = styled.div`
    background-color: white;
    color: black;
    padding: 7px 14px;
    border-radius: 3px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;

    p {
        font-size: 15px;
        font-weight: 600;
    }
`

const FilterCard = ({ name }) => {
    return (
        <Container>
            <p>{name}</p>
        </Container>
    )
}

export default FilterCard