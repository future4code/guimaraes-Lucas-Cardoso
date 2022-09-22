import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLottery } from '../provider'

const Container = styled.select`
    background-color: white;
    border: none;
    padding: 0.6rem 2rem;
    border-radius: 0.5rem;
    font-size: 14px;
    font-weight: 500;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    text-transform: uppercase;
`

const Select = () => {
    const { getLotteries, lotteries, getContestWithId } = useLottery()

    const handleChange = (e) => {
        getContestWithId(Number(e))
    }

    useEffect(() => {
        getLotteries()
    }, [])

    return (
        <Container onChange={(e) => handleChange(e.target.value)}>
            {lotteries.map((loteria, index) => (
                <option key={index} value={loteria.id}>{loteria.nome}</option>
            ))}
        </Container>
    )
}

export default Select