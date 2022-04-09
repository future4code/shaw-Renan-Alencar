import React from "react";
import CriarPlaylist from "./pages/CriarPlaylist/CriarPlaylist";
import VisualizarPlaylist from "./pages/VisualizarPlaylist/VisualizarPlaylist";
import DetalhesPlaylist from "./pages/DetalhesPlaylist/DetalhesPlaylist";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`



class App extends React.Component {
  state = {
    paginaAtual: "criarPlaylist",
    idPlaylist: "",
    nomePlaylist: "",
  };

  mudarPagina = (goPagina) => {
    this.setState({ paginaAtual: goPagina });
  };

  pegaIdPlaylist = (playlist) => {
    this.setState({ idPlaylist: playlist });
  };

  pegarNomePlaylist = (name) => {
    this.setState({ nomePlaylist: name });
  };

  selecionarPagina = () => {
    switch (this.state.paginaAtual) {
      case "criarPlaylist":
        return <CriarPlaylist goPagina={this.mudarPagina} />;

      case "detalhes":
        return (
          <DetalhesPlaylist
            goPagina={this.mudarPagina}
            idPlaylist={this.state.idPlaylist}
            nomePlaylist={this.state.nomePlaylist}
          />
        );
      case "visualizarPlaylist":
        return (
          <VisualizarPlaylist
            goPagina={this.mudarPagina}
            pegaIdPlaylist={this.pegaIdPlaylist}
            pegarNomePlaylist={this.pegarNomePlaylist}
          />
        );
      default:
        return <CriarPlaylist goPagina={this.mudarPagina}/>;
    }
  };

  render() {
    return <MainContainer>{this.selecionarPagina()}</MainContainer>;
  }
}

export default App;
