import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    height: 70px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    transition: all 0.2s cubic-bezier(0, 0, 0.98, 0.65) 0s;
    cursor: pointer;

    img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        padding: 10px;
    }
    
    span {
        margin-left: 15px;
    }

    :hover {
        background-color: #e9e9e9;
    }
`

function MatchesCard ({ img, name }) {
    return (
        <Container>
            <img src={img} alt={name} />
            <span>{name}</span>
        </Container>
    )
}

export default MatchesCard