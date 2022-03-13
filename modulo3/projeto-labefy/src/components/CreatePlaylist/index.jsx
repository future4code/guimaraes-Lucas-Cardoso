import React, { useState } from "react";
import styled from 'styled-components'
import { AiOutlineClose } from 'react-icons/ai'
import axios from "axios";

const Background = styled.div`
    background-color: black;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    height: calc(100vh - 100px);
    opacity: 70%;
`

const Container = styled.div`
    background-color: var(--main-color);
    width: 600px;
    margin-top: 50px;
    color: var(--white);
    padding: 30px;
    border-radius: 5px;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    > * {
        margin: 30px;
    }

    svg {
        position: absolute;
        font-size: 30px;
        top: 0;
        right: 0;
        cursor: pointer;
    }

    h3 {
        font-size: 30px;
        margin: 0;
    }

    div {
        width: 100%;
        display: flex;

        input {
            width: 80%;
        }

        textarea:focus, input:focus{
            outline: none;
        }

        button {
            font-family: 'Ruda', sans-serif;
            width: 150px;
            height: 45px;
            border-radius: 25px;
            background-color: var(--white);
            color: var(--black);
            font-size: 1.1vw;
            border: none;
            transition: background-color 0.75s ease;
            font-weight: bold;
            :hover {
                background-color: var(--black);
                color: var(--white);
                transition: color 0.6s ease;
            }
            font-size: 15px;
            border-radius: 0px 10px 10px 0px;
        }
    }
`

const CreatePlaylist = ({ setCreatePlaylist, getAllPlaylists }) => {
    const [userInput, setUserInput] = useState("")

    const createPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const headers = {
            headers: {
              Authorization: "lucas-cardoso-guimaraes"
            }
        }
        const body = {
            name: userInput
        }

        axios
            .post(url, body, headers)
            .then(() => {
                getAllPlaylists()
                alert("Playlist criada com sucesso!")
                setCreatePlaylist(false)
            })
            .catch(() => alert("Algo deu errado"))
    }

    return (
        <>
        <Background onClick={() => setCreatePlaylist(false)} />
        <Container>
            <AiOutlineClose onClick={() => setCreatePlaylist(false)} />
            <h3>Criar Playlist</h3>
            <div>
                <input
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Digite o nome da playlist"
                />
                <button onClick={createPlaylist}>Criar</button>
            </div>
        </Container> 
        </>
    )
}

export default CreatePlaylist