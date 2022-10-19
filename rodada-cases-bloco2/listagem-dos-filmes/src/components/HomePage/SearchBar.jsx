import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'

const Input = styled.input`
    max-width: 800px;
    width: 80%;
    padding: 20px 15px;
    border-radius: 5px;
    background-color: #00000055;
    border: none;
    //box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    color: #d6d6d6;
    transition: 0.6s ease all;
    font-size: 18px;
    font-weight: 500;

    :focus {
        outline: none;
        box-shadow: rgba(34, 34, 34, 0.35) 0px 5px 15px;
    }
`

const SearchBar = () => {
    return (
        <Input type="text" placeholder="Digite o nome do filme aqui..." />
    )
}

export default SearchBar