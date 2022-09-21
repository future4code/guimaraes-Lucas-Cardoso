import styled from 'styled-components'

const Container = styled.select`

`

const Select = () => {
    return (
        <Container>
            <option value="0">MEGA-SENA</option>
            <option value="1" selected>QUINA</option>
            <option value="2">Valor 3</option><option value="valor1">LOTOFACIL</option>
            <option value="3" selected>LOTOMANIA</option>
            <option value="4">TIMEMANIA</option>
            <option value="5">DIA DE SORTE</option>
        </Container>
    )
}

export default Select