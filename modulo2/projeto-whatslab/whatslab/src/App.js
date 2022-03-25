import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
` 

const ChatContainer = styled.div`
  display: flex;
  border: solid 1px black;
  height: 100%;
  align-items: flex-end;
  width: 50vw;
`

const ChatInput = styled.input`
  flex-grow: 2;
`

function App() {
  return (
    <MainContainer>
      <ChatContainer>
        <input type="text" placeholder="Nome"  />
        <ChatInput type="text" placeholder="Mensagem"  />
        <button>Enviar</button>
      </ChatContainer>
    </MainContainer>
  );
}

export default App;
