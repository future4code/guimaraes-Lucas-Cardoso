import styled from 'styled-components'

const Container = styled.div`
    position: relative;
    width: 70px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;
`

const Circle = styled.svg`
    position: relative;
    width: 70px;
    height: 70px;

    circle {
        width: 100px;
        height: 100px;
        fill: none;
        stroke-width: 8;
        stroke: #009a29;
        transform: translate(5px, 5px);
        stroke-dasharray: 189;
        stroke-dashoffset: 189;

        :nth-child(1) {
            stroke-dashoffset: 0;
            stroke: #0000005a;
        }

        :nth-child(2) {
            stroke-dashoffset: ${props => `calc(189 - (189 * ${props.percent}) / 100)`};
            stroke: #009a29;
        }
    }
`

const Number = styled.div`
    position: absolute;
    top: 26px;
    left: 0;
    width: 100%;
    height: 10%;

    text-align: center;
`

const UserScore = ({ percent }) => {
    return (
        <Container>
            <Circle percent={percent}>
                <circle cx='30' cy='30' r='30'></circle>
                <circle cx='30' cy='30' r='30'></circle>
            </Circle>
            <Number>
                <p>{percent}%</p>
            </Number>
        </Container>
    )
}

export default UserScore