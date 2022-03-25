import { useState, useEffect } from 'react'
import styled from 'styled-components'
import GlobalStyle from './globalStyles'
import axios from 'axios'
import Header from './components/Header'
import Swipe from './components/Swipe'
import Matches from './components/Matches'

const Container = styled.div`
  background-color: white;
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
`

function App() {
  const [component, setComponent] = useState("swipe")
  const [currentProfile, setCurrentProfile] = useState({})
  const [matches, setMatches] = useState([])

  const aluno = "lucas-cardoso-guimaraes"
  const headers = {
    headers: {
      Authorization: "lucas-cardoso-guimaraes"
    }
  }

  const getProfileToChoose = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`

    axios
      .get(url, headers)
      .then((res) => {
        if (res.data.profile.photo !== undefined) {
          setCurrentProfile(res.data.profile)
        }
      })
      .catch((err) => console.log(err))
  }

  const choosePerson = (choice) => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`

    const body = {
      id: currentProfile.id,
      choice: choice,
    }

    axios
      .post(url, body, headers)
      .then((res) => {
        getProfileToChoose()
        getMatches()
      })
      .catch((err) => console.log(err))
  }

  const getMatches = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/matches`

    axios
      .get(url, headers)
      .then((res) => setMatches(res.data.matches))
      .catch((err) => console.log(err))
  }
  
  const clear = () => {
    const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/clear`
  
    axios
      .put(url, headers)
      .then(() => {
        getProfileToChoose()
        getMatches()
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
      getProfileToChoose()
      getMatches()
  }, [])

  useEffect(() => {
    getMatches()
}, [currentProfile])

  const currentComponent = () => {
    if (component === "swipe") {
      return (
        <Swipe
          currentProfile={currentProfile}
          choosePerson={choosePerson}
        />
      )
    } else if (component === "matches") {
      return (
        <Matches matches={matches} />
      )
    }
  }

  return (
    <>
    <GlobalStyle />
    <Container>
      <Header component={component} setComponent={setComponent} />
      {currentComponent()}
    </Container>
    <button id="reset" onClick={clear}>Resetar Swipes e Matches</button>
    </>
  )
}

export default App;
