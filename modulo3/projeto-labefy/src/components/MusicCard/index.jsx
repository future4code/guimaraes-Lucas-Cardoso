import React from "react";
import styled from 'styled-components'
import { MdDelete } from 'react-icons/md'
import { BsPlayCircleFill } from 'react-icons/bs'
import axios from "axios";

const Container = styled.div`
    background-color: #171717;
    display: flex;
    align-items: center;
    color: var(--white);
    cursor: pointer;
    padding: 15px;

    span {
        font-size: 17px;
    }

    #title {
        display: flex;
        align-items: center;
        width: 85%;

        div {
            img {
                width: 90px;
            }

            svg {
                position: absolute;
                font-size: 55px;
                color: var(--white);
                transform: translate(19px, 50px);
                opacity: 0%;
            }

        }

        span {
            padding: 15px;
            margin-left: 5px;
        }
    }

    :hover {
        background-color: #141414;
        transition: background-color 0.15s ease;

        img {
            filter: brightness(30%);
        }

        svg {
            opacity: 100%;
            transition: opacity 0.2s ease;
            z-index: 2;
        }

        #play {
            opacity: 100%;
            transform: translate(19px, 19px);
            transition: opacity 0.2s ease, transform 0.2s ease;
        }
    }
`

const Artist = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    div {
        display: flex;
        align-items: center;

        > * {
            margin: 10px;
        }

        svg {
            font-size: 25px;
            opacity: 0%;
            padding: 10px;

            :hover {
                color: white;
                transition: color 0.3s ease;
            }
        }
    }
`

const MusicCard = ({ id, name, artist, img, url, getPlaylistTracks, playlistId }) => {
    const getRandomDuration = () => {
        let minutes = Math.floor(Math.random() * (5 - 2) + 2)
        let seconds = Math.floor(Math.random() * 60)

        if (seconds < 10) {
            seconds = `0${seconds.toString()}`
        }

        return `${minutes}:${seconds}`
    }

    const removeTrackFromPlaylist = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${id}`
        const headers = {
            headers: {
                Authorization: "lucas-cardoso-guimaraes"
            }
        }

        axios
            .delete(url, headers)
            .then(() => {
                getPlaylistTracks()
                alert(`Música ${name} removida com sucesso!`)
            })
            .catch((err) => console.log(err))
    }

    return (
        <Container>
            <div id="title">
                <div>
                    <BsPlayCircleFill id="play" />
                    <img src={img} />
                </div>
                <span>{name}</span>
            </div>
            <Artist>
                <span>{artist}</span>
                <div>
                    <span>{getRandomDuration()}</span>
                    <MdDelete onClick={removeTrackFromPlaylist} />
                </div>
            </Artist>
            
        </Container>
    )
}

export default MusicCard