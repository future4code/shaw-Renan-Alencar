import React from "react";
import styled from "styled-components";
import MsgChat from "./components/MsgChat";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <MsgChat></MsgChat>
      </MainContainer>
    );
  }
}

export default App;
