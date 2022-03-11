import React from "react";
import styled from 'styled-components'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import { CgPlayList, CgPlayListAdd } from 'react-icons/cg'
import { keyframes } from "styled-components";

const OpenNav = keyframes`
    0% {
        display: none;
        opacity: 0%;
    }

    20% {
        display: initial;
        opacity: 0%;
    }

    100% {
        display: initial;
        opacity: 100%;
    }
`

const Container = styled.div`
    height: calc(100vh - 90px);
    width: 80px;
    display: flex;
    flex-direction: column;
    background-color: #0c0c0c;
    color: var(--white);
    transition: width 0.3s ease;
    padding-top: 10px;

    :hover {
        width: 290px;

        .onlyOnHover {
            animation: ${OpenNav} 0.4s;
            display: initial;
        }
    }

    > * {
        padding: 10px 20px;
    }
`

const NavDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #000000bd;
        transition: 0.4s background-color;
    }

    svg {
        width: 35px;
        height: 35px;
    }

    span {
        margin-left: 15px;
        font-family: 'Ruda', sans-serif;
    }

    .onlyOnHover {
        display: none;
    }
`

const Sidebar = () => {
    return (
        <Container>
            <NavDiv>
                <AiFillHome />
                <span className="onlyOnHover">Home</span>
            </NavDiv>
            <NavDiv>
                <AiOutlineSearch />
                <span className="onlyOnHover">Pesquisar</span>
            </NavDiv>
            <NavDiv>
                <CgPlayList />
                <span className="onlyOnHover">Suas Playlists</span>
            </NavDiv>
            <NavDiv>
                <CgPlayListAdd />
                <span className="onlyOnHover">Criar Playlist</span>
            </NavDiv>
        </Container>
    )
}

export default Sidebar