import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers "
import  AddMusica  from "../../components/AddMusica"
import styled from "styled-components";
import lixeira from "../../assets/lixeira.png"


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1{
    font-size: 30px;
    margin: 30px;
    text-align: center;
  }
`;

const ListaMusicas = styled.li`
  border: 1px solid black;
  align-items: center;
  justify-content: center;
  margin: 20px;
  padding: 10px;

  div{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px ;
    align-items: center;
  }

  button{
    margin-left: 10px;
    height: 40px;
    &:hover {
    cursor: pointer;
    background-color: #f5485f;
  }
}
`

const DivButton = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  button {
    padding: 10px;
    background-color: #4d9c4d;
    width: 130px;
    &:hover {
      cursor: pointer;
      background-color: #69daf7;
    }
  }
`;

class DetalhesPlaylist extends React.Component {
  state = {
    arrayMusicas: [],
    idMusica: "",
  };

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = () => {
    const url = `${BASE_URL}/${this.props.idPlaylist}/tracks`;
    axios
      .get(url, HEADERS)
      .then((res) => {
        this.setState({ arrayMusicas: res.data.result.tracks });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  removeTrackFromPlaylist = (id) => {
    if (window.confirm("Tem certeza que deseja deletar essa música?")) {
      const url = `${BASE_URL}/${this.props.idPlaylist}/tracks/${id}`;
      axios
        .delete(url, HEADERS)
        .then((res) => {
          this.getPlaylistTracks();
          alert("Musica deletada com sucesso!");
        })
        .catch((err) => {
          alert(err.response);
        });
    }
  };

  render() {
    const mostrarMusicas = this.state.arrayMusicas.map((musica) => {
      return (
        <ListaMusicas key={musica.id}>
          <div>
            <p>{musica.name}</p> <p>{musica.artist}</p>
          </div>
          <div>
            <audio
              src={musica.url}
              type="audio/mp3"
              controls="controls"
            ></audio>
            <button onClick={() => this.removeTrackFromPlaylist(musica.id)}>
              <img src={lixeira} alt="lixeira" />
            </button>
          </div>
        </ListaMusicas>
      );
    });

    return (
      <MainContainer>
        <ul>
          <h1>{this.props.nomePlaylist}</h1>
          {mostrarMusicas}
        </ul>
        <AddMusica
          idPlaylist={this.props.idPlaylist}
          getPlaylistTracks={this.getPlaylistTracks}
        />
        <DivButton>
        <button onClick={() => this.props.goPagina("visualizarPlaylist")}>
          Visualizar PlayList
        </button>
        <button onClick={() => this.props.goPagina("criarPlaylist")}>
          Criar Playlist
        </button>
        </DivButton>
      </MainContainer>
    );
  }
}

export default DetalhesPlaylist;