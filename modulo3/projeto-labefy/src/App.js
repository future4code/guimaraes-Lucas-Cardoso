import React, { useEffect, useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components'
import axios from 'axios';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Playlists from './pages/Playlists';
import MusicPage from './pages/MusicPage';
import CreatePlaylist from './components/CreatePlaylist';

const Container = styled.div`
  padding-top: 90px;
  display: flex;

  .itemsContainer {
    width: 100%;
  }
`

const App = () => {
  const [page, setPage] = useState("playlists")
  const [musicPlaylist, setMusicPlaylist] = useState({})
  const [playlists, setPlaylists] = useState([])
  const [createPlaylist, setCreatePlaylist] = useState(false)

  useEffect(() => {
    getAllPlaylists()
  }, [])

  const getAllPlaylists = () => {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
    const headers = {
      headers: {
        Authorization: "lucas-cardoso-guimaraes"
      }
    }

    axios
      .get(url, headers)
      .then((res) => setPlaylists(res.data.result.list))
      .catch((err) => console.log(err))
  }

  const currentPage = () => {
    if (page === "home") {
      return (
        <Home />
      )
    } else if (page === "playlists") {
      return (
        <Playlists
          playlists={playlists}
          createPlaylist={createPlaylist}
          setCreatePlaylist={setCreatePlaylist}
          getAllPlaylists={getAllPlaylists}
          setPage={setPage}
          setMusicPlaylist={setMusicPlaylist}
        />
      )
    } else if (page === "musicpage") {
      return (
        <MusicPage
          id={musicPlaylist.id}
          name={musicPlaylist.name}
          img={musicPlaylist.img}
        />
      )
    }
  }

  return (
    <>
    <GlobalStyle />
    <Header />
    <Container>
      <Sidebar
        playlists={playlists}
        setPage={setPage}
        setCreatePlaylist={setCreatePlaylist}
        createPlaylist={createPlaylist}
        setMusicPlaylist={setMusicPlaylist}
      />
      {createPlaylist ? (
        <CreatePlaylist
            setCreatePlaylist={setCreatePlaylist}
            getAllPlaylists={getAllPlaylists}
        />
      ) : null}
      <div className='itemsContainer'>
        {currentPage()}
      </div>
    </Container>
    </>
  )
}

export default App;
