import React from "react";
import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { HEADERS } from "../constants/headers ";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0;

  h2 {
    font-size: 25px;
    text-align: center;
    margin-bottom: 10px;
  }

  span {
    text-align: center;
    margin-top: 10px;
  }

  button {
    padding: 5px;
    width: 80px;
    background-color: #4d9c4d;
    &:hover {
      cursor: pointer;
      background-color: #69daf7;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  input {
    margin: 5px;
    padding: 5px;
  }
`;

class AddMusica extends React.Component {
  state = {
    inputNome: "",
    inputCantor: "",
    inputURL: "",
  };

  addTrackToPlaylist = () => {
    const url = `${BASE_URL}/${this.props.idPlaylist}/tracks`;
    const body = {
      name: this.state.inputNome,
      artist: this.state.inputCantor,
      url: this.state.inputURL,
    };
    axios
      .post(url, body, HEADERS)
      .then((res) => {
        this.props.getPlaylistTracks();
        this.setState({ inputNome: "", inputCantor: "", inputURL: "" });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };
  onChangeCantor = (event) => {
    this.setState({ inputCantor: event.target.value });
  };
  onChangeURL = (event) => {
    this.setState({ inputURL: event.target.value });
  };

  render() {
    return (
      <MainContainer>
        <h2>Adicionar uma música</h2>
        <Form>
          <input
            placeholder="Nome da Musica"
            value={this.state.inputNome}
            onChange={this.onChangeNome}
          />

          <input
            placeholder="Nome do Artista ou Banda"
            value={this.state.inputCantor}
            onChange={this.onChangeCantor}
          />

          <input
            placeholder="Link música"
            value={this.state.inputURL}
            onChange={this.onChangeURL}
          />
        </Form>

        <span>
          {" "}
          <button onClick={this.addTrackToPlaylist}>Adicionar</button>
        </span>
      </MainContainer>
    );
  }
}

export default AddMusica;
