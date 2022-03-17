import React from 'react'
import styled from 'styled-components'
import CreatePlaylist from '../../components/CreatePlaylist'
import PlaylistCard from '../../components/PlaylistCard'

const Container = styled.div`
    padding: 0px 30px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: repeat(auto-fill,minmax(210px,1fr));
    margin-bottom: 100px;
`

const Title = styled.h2`
    padding-left: 30px;
    color: var(--white);
    font-size: 40px;
`

const Playlists = ({
    playlists,
    getAllPlaylists,
    setPage,
    setMusicPlaylist,
}) => {

    return (
        <>
        <Title>Suas Playlists</Title>
        <Container>
            {playlists.map((item, index) => {
                return (
                    <PlaylistCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        img={`https://picsum.photos/250/250?a=${index}`}
                        getAllPlaylists={getAllPlaylists}
                        setPage={setPage}
                        setMusicPlaylist={setMusicPlaylist}
                    />
                )
            })}
        </Container>
        </>
    )
}

export default Playlists