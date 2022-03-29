import './App.css';
import styled from 'styled-components';
import Register from './pages/Register';
import UserList from './pages/UserList';
import { useState } from 'react';

const Container = styled.div`
  background-image: radial-gradient(circle, #161616, #121212, #0d0d0d, #070707, #000000);
  height: 100vh;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Button = styled.button`
  padding: 10px;
  border: none;
  background: linear-gradient( to right, #47bfff 5%, #385ed2 60%);
  border-radius: 3px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  margin-top: 40px;
  
  :hover {
  background: linear-gradient( to right,#76caff 5%,#2f62ff 60%);
  }
`

const App = () => {
  const [page, setPage] = useState("register")
  const [users, setUsers] = useState([])

  const pageCheck = () => {
    if (page === "register") {
      return (
        <PageContainer>
          <Register setUsers={setUsers} />
          <Button onClick={() => setPage("userlist")}>Trocar página</Button>
        </PageContainer>
      )
    } else if (page === "userlist") {
      return (
        <PageContainer>
          <UserList users={users} setUsers={setUsers} />
          <Button onClick={() => setPage("register")}>Trocar página</Button>
        </PageContainer>
      )
    }
  }

  return (
    <Container>
      {pageCheck()}
    </Container>
  );
}

export default App;
