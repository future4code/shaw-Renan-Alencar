import React from "react";
import axios from "axios"
import { BASE_URL } from '../../constants/urls'
import { HEADERS } from "../../constants/headers "
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
    input{
      padding: 8px;
      margin-right: 15px;
    }

    button{
      padding: 8px 10px;
    }
`

const Label = styled.div`
  margin: 30px 0;
`

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
        <h2>Criar Playlist</h2>
        <Label>
          <input
            placeholder="Nome da Playlist"
            value={this.state.inputPlaylist}
            onChange={this.onChancePlaylist}
          />
          <button onClick={this.createPlaylist}>Criar Playlist</button>
        </Label>
        <button onClick={() => this.props.goPagina("visualizarPlaylist")}>
          Visualizar PlayList
        </button>
      </MainContainer>
    );
  }
}

export default CriarPlaylist;