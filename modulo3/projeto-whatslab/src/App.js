import styled from "styled-components";
import Chat from "./components/Chat";
import Input from "./components/Input";
import "./App.css"
import { useState } from "react";

const Container = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  margin: auto;
`

function App() {
  const [messages, setMessages] = useState([])

  return (
    <Container>
      <Chat messages={messages} />
      <Input messages={messages} setMessages={setMessages} />
    </Container>
  );
}

export default App;
