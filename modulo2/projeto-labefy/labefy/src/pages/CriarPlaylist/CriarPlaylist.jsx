import React from "react";
import axios from "axios"
import { BASE_URL } from '../../constants/urls'
import { HEADERS } from "../../constants/headers "
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  h1 {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

const Label = styled.div`
  input {
    padding: 8px;
    margin-right: 15px;
  }
  button {
    padding: 8px 10px;
    cursor: pointer;
  }
`;

const ButtonVisualizar = styled.button`
  margin-top: 30px;
  padding: 8px 10px;
  cursor: pointer;
`;

class CriarPlaylist extends React.Component {
  state = {
    inputPlaylist: "",
  };

  onChancePlaylist = (event) => {
    this.setState({ inputPlaylist: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.inputPlaylist,
    };
    axios
      .post(`${BASE_URL}`, body, HEADERS)
      .then((res) => {
        alert(`Playlist ${this.state.inputPlaylist} cria com sucesso`);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  render() {
    return (
      <MainContainer>
        <h1>Criar Playlist</h1>
        <Label>
          <input
            placeholder="Nome da Playlist"
            value={this.state.inputPlaylist}
            onChange={this.onChancePlaylist}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
        </Label>
        <ButtonVisualizar onClick={() => this.props.goPagina("visualizarPlaylist")}>
          Visualizar PlayList
        </ButtonVisualizar>
      </MainContainer>
    );
  }
}

export default CriarPlaylist;