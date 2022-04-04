import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Etapa4 from "./components/Etapa4";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`

class App extends React.Component {
  state = {
    pagina: "etapa1",
  };

  etapa2 = () => {
    this.setState({ pagina: 'etapa2'});
  }

  etapa3 = () => {
    this.setState({pagina: 'etapa3'})
  }

  etapa4 = () => {
    this.setState({pagina: 'etapa4'})
  }

  render() {
    let secao;

    switch (this.state.pagina) {
      case "etapa1":
        secao = <Etapa1 onClickEtapa2={this.etapa2}/>;
        break;

      case "etapa2":
        secao = <Etapa2 onClickEtapa3={this.etapa3}/>;
        break;

      case "etapa3":
        secao = <Etapa3 onClickEtapa4={this.etapa4}/>;
        break;

      case "etapa4":
        secao = <Etapa4 />
        break;

      default:
        secao = <p>Invalido</p>;
        break;
    }

    return( 
      <MainContainer>
        {secao}
      </MainContainer>
  );
  }
}

export default App;
