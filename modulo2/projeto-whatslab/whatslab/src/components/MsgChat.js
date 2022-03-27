import React from "react";
import styled from "styled-components";

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

class MsgChat extends React.Component {
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
        <p key={index}>
          <strong>{chat.nome}</strong>: {chat.mensagem}
        </p>
      );
    });
    return (
      <ChatContainer>
        <TelaMsg>{listaConversa}</TelaMsg>
        <div>
          <NomeInput
            value={this.state.valorInputNome}
            onChange={this.onChangeNome}
            placeholder="Nome"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.adicionarComentario();
              }
            }}
          />
          <MsgInput
            value={this.state.valorInputMsg}
            onChange={this.onChangeMsg}
            placeholder="Mensagem"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                this.adicionarComentario();
              }
            }}
          />
          <button onClick={this.adicionarComentario}>Enviar</button>
        </div>
      </ChatContainer>
    );
  }
}

export default MsgChat;
