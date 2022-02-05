import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  h3 {
    color: #666666;
    margin: 15px;
  }
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  margin-bottom: 20px;

  input {
    width: 95%;
    margin: 3px;
  }

  button {
    margin: 5px;
    box-shadow:inset 0px 1px 0px 0px #ffffff;
    background-color:#ffffff;
    border-radius:6px;
    border:1px solid #dcdcdc;
    cursor:pointer;
    color:#666666;
    font-family:Arial;
    font-size:13px;
    font-weight:bold;
    padding:6px 24px;
    text-decoration:none;
    text-shadow:0px 1px 0px #ffffff;
  }
  button:hover {
    background-color:#f6f6f6;
  }
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?a=1',
        fotoPost: 'https://picsum.photos/200/150?a=1',
      },
      {
        nomeUsuario: 'Luis Miller',
        fotoUsuario: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2',
      },
      {
        nomeUsuario: 'UndoingCoffee',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3',
      },
    ],

    inputUsername: "",
    inputUserphoto: "",
    inputPhoto: "",
  }

  onChangeUsername = (event) => {
    this.setState({ inputUsername: event.target.value })
  }
  onChangeUserphoto = (event) => {
    this.setState({ inputUserphoto: event.target.value })
  }
  onChangePhoto = (event) => {
    this.setState({ inputPhoto: event.target.value })
  }

  adicionarPost = () => {
    let newPost = {
      nomeUsuario: this.state.inputUsername,
      fotoUsuario: this.state.inputUserphoto,
      fotoPost: this.state.inputPhoto,
    }

    let newPosts = [newPost, ...this.state.posts]

    this.setState({ posts: newPosts })
  }

  render() {

    const postList = this.state.posts.map((post) => {
      return <Post
      nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}
    />
    })

    return (
      <MainContainer>
        <h3>Enviar foto:</h3>
        <InputContainer>
          <input
            value={this.state.inputUsername}
            onChange={this.onChangeUsername}
            placeholder="Nome de usuário"
          />
          <input
            value={this.state.inputUserphoto}
            onChange={this.onChangeUserphoto}
            placeholder="Foto do usuário (URL)"
          />
          <input
            value={this.state.inputPhoto}
            onChange={this.onChangePhoto}
            placeholder="Foto (URL)"
          />
          <button onClick={this.adicionarPost}>Adicionar</button>
        </InputContainer>
        {postList}
      </MainContainer>
    );
  }
}

export default App;
