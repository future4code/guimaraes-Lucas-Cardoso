import React, { useState } from "react";
import styled from 'styled-components'
import { BsPlayCircleFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import axios from "axios";

const Container = styled.div`
    background-color: var(--background-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    color: var(--white);
    padding: 15px;
    cursor: pointer;
    transition: background-color 0.33s ease;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    #playy {
        margin: -5px;
    }

    #deletee {
        margin: 5px 0px 0px -5px;
    }

    .title {
        width: 100%;
    }

    h3 {
        margin: 0;
        padding-top: 20px;
        padding-bottom: 15px;
        font-size: 1.4em;
    }

    picture {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-width: 100%;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;
        }

        #playy {
            position: absolute;
            color: var(--main-color);
            width: 50px;
            height: 50px;
            background-color: white;
            border-radius: 50px;
            transform: translate(75px, 100px);
            opacity: 0%;
        }

        #deletee {
            position: absolute;
            width: 40px;
            height: 40px;
            transform: translate(85px, -80px);
            opacity: 0%;

            :hover {
                color: #910000e8;
                transition: color 0.16s ease;
            }
        }
    }

    :hover {
        background-color: #363636;

        #playy {
            transform: translate(75px, 70px);
            opacity: 100%;
            transition: opacity 0.6s ease, transform 0.2s ease;
        }

        #deletee {
            opacity: 100%;
            transition: opacity 0.2s ease;
        }
    }
`

const PlaylistCard = ({ id, name, img, getAllPlaylists, setPage, setMusicPlaylist }) => {
    const deletePlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/"
        const headers = {
            headers: {
              Authorization: "lucas-cardoso-guimaraes"
            }
        }

        axios
            .delete(`${url}${id}`, headers)
            .then(() => {
                getAllPlaylists()
                alert(`Playlist ${name} deletada com sucesso!`)
            })
            .catch((err) => console.log(err))
    }

    const handleClick = () => {
        setPage("musicpage")
        setMusicPlaylist({
            id: id,
            name: name,
            img: img,
        })
    }

    return (
        <Container onClick={handleClick}>
            <picture>
                <img src={img} alt={name} />
                <BsPlayCircleFill id="playy" />
                <MdDelete id="deletee" onClick={deletePlaylist} />
            </picture>
            <div className="title">
                <h3>{name}</h3>
            </div>
        </Container>
    )
}

export default PlaylistCard