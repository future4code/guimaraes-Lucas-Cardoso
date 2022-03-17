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
    min-height: calc(100vh - 100px);
    width: 80px;
    display: flex;
    flex-direction: column;
    background-color: var(--black);
    color: var(--white);
    transition: width 0.3s ease;
    padding-top: 10px;

    .navItems {
        position: fixed;
        width: 80px;

        > * {
            padding: 10px 20px;
        }
    }

    :hover {
        width: 290px;

        .onlyOnHover {
            animation: ${OpenNav} 0.4s;
            display: initial;
        }

        .navItems {
            width: 250px;
        }
    }

    .fixed {
        position: fixed;
    }
`

const NavDiv = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    :hover {
        background-color: #000000bd;
        transition: 1s background-color;
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

const PlayListsContainer = styled.div`
    border-top: 1px solid #404040;
    margin: 20px;
    display: none;
    position: fixed;
    margin-top: 250px;
    width: 210px;

    div {
        margin-top: 20px;
        cursor: pointer;
        display: flex;
        flex-direction: column;

        > * {
            margin: 7px 0px;

            :hover {
            color: white;
            transition: color 0.2s ease;
            }
        }
    }
`

const Sidebar = ({ playlists, setPage, createPlaylist, setCreatePlaylist, setMusicPlaylist }) => {
    const createPlaylistHandle = () => {
        setCreatePlaylist(!createPlaylist)
    }

    const handleClick = (id, name, index) => {
        setPage("musicpage")
        setMusicPlaylist({
            id: id,
            name: name,
            img: `https://picsum.photos/250/250?a=${index}`,
        })
    }

    return (
        <Container>
                <div className="navItems">
                    <NavDiv onClick={() => setPage("home")}>
                        <AiFillHome />
                        <span className="onlyOnHover">Home</span>
                    </NavDiv>
                    <NavDiv onClick={() => setPage("home")}>
                        <AiOutlineSearch />
                        <span className="onlyOnHover">Pesquisar</span>
                    </NavDiv>
                    <NavDiv onClick={() => setPage("playlists")}>
                        <CgPlayList />
                        <span className="onlyOnHover">Suas Playlists</span>
                    </NavDiv>
                    <NavDiv onClick={createPlaylistHandle}>
                        <CgPlayListAdd />
                        <span className="onlyOnHover">Criar Playlist</span>
                    </NavDiv>
                </div>
                <PlayListsContainer className="onlyOnHover">
                    <div>
                        {playlists.map((item, index) => {
                            return (
                                <span
                                    key={index}
                                    onClick={() => handleClick(item.id, item.name, index)}
                                >{item.name}</span>
                            )
                        })}
                    </div>
                </PlayListsContainer>
        </Container>
    )
}

export default Sidebar