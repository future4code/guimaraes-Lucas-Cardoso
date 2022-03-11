import React, { useEffect, useState } from 'react';
import GlobalStyle from './globalStyles';
import styled from 'styled-components'
import Rotas from './routes';
import Header from './components/Header';
import axios from 'axios';
import Sidebar from './components/Sidebar';

const Container = styled.div`
  display: flex;

  .itemsContainer {
    width: 100%;
  }
`

function App() {
  const [playlists, setPlaylists] = useState([])

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

  console.log(playlists)

  return (
    <>
    <GlobalStyle />
    <Header />
    <Container>
      <Sidebar />
      <div className='itemsContainer'>
        <Rotas playlists={playlists} />
      </div>
    </Container>
    </>
  )
}

export default App;
