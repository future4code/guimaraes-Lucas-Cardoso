import './App.css';
import styled from 'styled-components';
import { useState } from 'react';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';
import End from './components/End';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

function App() {
  const [ensino, setEnsino] = useState("")
  const [stage, setStage] = useState("form1")

  const buttonStage = (form) => {
    setStage(form)
  }
  
  const switchForm = () => {
    if (stage === "form1") {
      return (
        <Form1 setEnsino={setEnsino} buttonStage={() => buttonStage("form2")} />
      )
    } else if (stage === "form2" && ensino === "superior") {
      return (
        <Form2 buttonStage={() => buttonStage("end")} />
      )
    } else if (stage === "form2" && ensino === "medio") {
      return (
        <Form3 buttonStage={() => buttonStage("end")} />
      )
    } else {
      return (
        <End />
      )
    }
  }

  return (
    <Container>
      {switchForm()}
    </Container>
  )
}

export default App;
