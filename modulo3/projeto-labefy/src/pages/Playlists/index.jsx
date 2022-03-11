import React from 'react'
import styled from 'styled-components'
import PlaylistCard from '../../components/PlaylistCard'

const Container = styled.div`
    padding: 1rem;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fill,minmax(190px,1fr));
`

const Playlists = ({ playlists }) => {
    return (
        <Container>
            {playlists.map((item, index) => {
                return (
                    <PlaylistCard
                        key={index}
                        id={item.id}
                        name={item.name}
                        img={`https://picsum.photos/250/250?a=${index}`}
                    />
                )
            })}
        </Container>
    )
}

export default Playlists