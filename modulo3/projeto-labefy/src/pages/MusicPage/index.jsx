import axios from "axios";
import React, { useEffect } from "react";
import styled from 'styled-components'
import MusicCard from "../../components/MusicCard";
import { useState } from "react";
import AddMusic from "../../components/AddMusic";

const Container = styled.div`
    margin-bottom: 100px;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem;

    button {
        font-size: 20px;
        height: 75px;
        background-color: var(--white);
        padding: 15px;

    }
`

const TopContainer = styled.div`
    display: flex;

    img {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 2rem;
        color: var(--white);

        h2 {
            font-size: 90px;
            padding: 0;
            margin: 0;
            font-weight: bolder;
        }

        span {
            font-size: 30px;
        }
    }
`

const MusicsList = styled.div`
    padding: 0rem 3rem;
`

const MusicPage = ({ id, name, img }) => {
    const [tracks, setTracks] = useState([])
    const [addMusicModal, setAddMusicModal] = useState(false)

    const getPlaylistTracks = () => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const headers = {
            headers: {
                Authorization: "lucas-cardoso-guimaraes"
            }
        }

        axios
            .get(url, headers)
            .then((res) => setTracks(res.data.result.tracks))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getPlaylistTracks()
    }, [])

    return (
        <Container>
            {addMusicModal ? (
                <AddMusic
                    setAddMusicModal={setAddMusicModal}
                    getPlaylistTracks={getPlaylistTracks}
                    id={id}
                />
            ) : null}
            <Top>
                <TopContainer>
                    <img src={img} alt={name} />
                    <div>
                        <h2>{name}</h2>
                        <span>Lucas Cardoso</span>
                    </div>
                </TopContainer>
                <button onClick={() => setAddMusicModal(true)}>Adicionar Música</button>
            </Top>
            <MusicsList>
                {tracks.map((item, index) => {
                    return (
                        <MusicCard
                            id={item.id}
                            name={item.name}
                            artist={item.artist}
                            url={item.url}
                            img={`https://picsum.photos/100/100?a=${item.id}`}
                            key={index}
                            getPlaylistTracks={getPlaylistTracks}
                            playlistId={id}
                        />
                    )
                })}
            </MusicsList>
        </Container>
    )
}

export default MusicPage