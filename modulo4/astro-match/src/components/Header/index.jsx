import React from 'react'
import styled from 'styled-components'
import Logo from '../../images/astromatch-logo.png'
import { MdSwipe } from 'react-icons/md'
import { BsFillPersonCheckFill } from 'react-icons/bs'

const Container = styled.div`
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid lightgray;
    
    img {
        max-height: 100%;
    }

    svg {
        font-size: 30px;
        padding: 12px;
        cursor: pointer;
        transition: font-size 0.2s ease;
    }

    #swipe {
        color: rgb(74, 163, 151);
        visibility: ${props => props.children[0].props.current};

        :hover {
        }
    }

    #match {
        color: rgb(117, 49, 146);
        visibility: ${props => props.children[2].props.current};
    }

    div {
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: ${props => props.children[2].props.current};
        
        :hover {
            svg {
                font-size: 22px;
            }
        }
    }
`

function Header ({ component, setComponent }) {
    const handleClick = (comp) => {
        setComponent(comp)
    }

    return (
        <Container>

            <div current={component !== "swipe" ? "initial" : "hidden"}>
                <MdSwipe
                    id='swipe'
                    onClick={() => handleClick("swipe")}
                />
            </div>

            <img src={Logo} alt="Logo" />

            <div current={component !== "matches" ? "initial" : "hidden"}>
                <BsFillPersonCheckFill
                    id='match'
                    onClick={() => handleClick("matches")}
                />
            </div>

        </Container>
    )
}

export default Header