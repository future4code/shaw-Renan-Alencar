import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatContainer = styled.div`
  background-color: beige;
  display: flex;
  flex-direction: column;
  border: solid 1px black;
  height: 100%;
  width: 50vw;

  div {
    display: flex;
  }
`;

const TelaMsg = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`;

const NomeInput = styled.input`
  max-width: 6.25rem;
`;
const MsgInput = styled.input`
  flex-grow: 2;
`;

class App extends React.Component {
  state = {
    chats: [],
    valorInputNome: "",
    valorInputMsg: "",
  };

  adicionarComentario = () => {
    const novoComentario = {
      nome: this.state.valorInputNome,
      mensagem: this.state.valorInputMsg,
    };

    const novaConversa = [...this.state.chats, novoComentario];
    this.setState({ chats: novaConversa });
    this.setState({ valorInputNome: "" });
    this.setState({ valorInputMsg: "" });
  };

  onChangeNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeMsg = (event) => {
    this.setState({ valorInputMsg: event.target.value });
  };

  render() {
    const listaConversa = this.state.chats.map((chat, index) => {
      return (
        <p>
          {chat.nome}: {chat.mensagem}
        </p>
      );
    });

    return (
      <MainContainer>
        <ChatContainer>
          <TelaMsg>{listaConversa}</TelaMsg>
          <div>
            <NomeInput
              value={this.state.valorInputNome}
              onChange={this.onChangeNome}
              placeholder="Nome"
            />
            <MsgInput
              value={this.state.valorInputMsg}
              onChange={this.onChangeMsg}
              placeholder="Mensagem"
            />
            <button onClick={this.adicionarComentario}>Enviar</button>
          </div>
        </ChatContainer>
      </MainContainer>
    );
  }
}

export default App;
