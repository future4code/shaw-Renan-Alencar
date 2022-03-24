import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  button{
    margin-bottom: 20px;
    &:hover {
      background-color: azure;
    }
  }
`

const Formulario = styled.div`
  margin: 10px;

  input{
    margin: 10px;
    padding: 5px 0;
  }
`

class App extends React.Component {

  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'renan',
        fotoUsuario: 'https://picsum.photos/50/50?a=2',
        fotoPost: 'https://picsum.photos/200/150?a=2'
      },
      {
        nomeUsuario: 'jõao',
        fotoUsuario: 'https://picsum.photos/50/50?a=3',
        fotoPost: 'https://picsum.photos/200/150?a=3'
      }
    ],

    valorInputNone: '',
    valorInputFotoUsuario: '',
    valorInputFotoPost: ''
  };

  adicionaPost = () => {

    const novoPost = {
      nomeUsuario: this.state.valorInputNone,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    const novosPosts = [...this.state.posts, novoPost];
    this.setState({posts: novosPosts})
  }


  onChangeInputNome = (event) => {
    this.setState({valorInputNone: event.target.value});
  }

  onChangeFotoUsuario = (event) => {
    this.setState({valorInputFotoUsuario: event.target.value});
  }

  onChangeFotoPost = (event) => {
    this.setState({valorInputFotoPost: event.target.value});
  }

  render() {

    const listaPosts = this.state.posts.map((post,index) => {
      return (
        <Post 
        key={index}
        nomeUsuario={post.nomeUsuario}
        fotoUsuario={post.fotoUsuario}
        fotoPost={post.fotoPost}
        />
      )
    })

    return (
      <MainContainer>
        <Formulario>
          <input 
          value={this.state.valorInputNone}
          onChange={this.onChangeInputNome}
          placeholder={"Nome Usuário"}
          />
          <input 
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeFotoUsuario}
          placeholder={"Foto Usuário"}
          />
          <input 
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeFotoPost}
          placeholder={"Foto Post"}
          />
        </Formulario>
        <button onClick={this.adicionaPost}>Adicionar Post</button>
        {listaPosts}
      </MainContainer>
    );
  }
}

export default App;
