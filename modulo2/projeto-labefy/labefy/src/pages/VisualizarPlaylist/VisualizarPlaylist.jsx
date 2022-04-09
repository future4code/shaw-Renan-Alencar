import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers "
import styled from "styled-components";
import lixeira from "../../assets/lixeira.png"

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1{
    font-size: 30px;
    margin: 30px;
  }
`;

const CardDiv = styled.span`
  display: flex;
  align-items: center;

`;

const CharacterCard = styled.li`
  display: flex;
  border: 1px solid black;
  padding: 10px;
  margin: 15px 20px;
  width: 300px;
  justify-content: center;
  &:hover {
    cursor: pointer;
    background-color: lightblue;
  }
`;

const ButtonLixeira = styled.button`
  padding: 6px;
  &:hover {
    cursor: pointer;
    background-color: #f5485f;
  }
`

const ButtonList = styled.button`
  padding: 14px;
  margin-top: 25px;
`

class VisualizarPlaylist extends React.Component {
  state = {
    arrayPlaylist: [],
  };

  componentDidMount() {
    this.getAllPlaylists();
  }

  getAllPlaylists = () => {
    axios
      .get(`${BASE_URL}`, HEADERS)
      .then((res) => {
        this.setState({ arrayPlaylist: res.data.result.list });
      })
      .catch((err) => {
        alert(err.response)
      })
  };

  deletePlaylist = (id) => {
   if(window.confirm("Tem certeza que deseja deletar essa Playlist?")){
     axios.delete(`${BASE_URL}/${id}`, HEADERS)
      .then((res) => {
        alert("Playlist deletada!")
        this.getAllPlaylists()
      })
      .catch((err) => {
        alert(err.response)
      })
    }
   } 

  detalhesMusica = (id, name) => {
    this.props.pegaIdPlaylist(id);
    this.props.pegarNomePlaylist(name);
    this.props.goPagina("detalhes");
  }

  render() {
    const mostrarLista = this.state.arrayPlaylist.map((musica) => {
      return (
        <CardDiv>
          <CharacterCard
            key={musica.id}
            onClick={() => this.detalhesMusica(musica.id, musica.name)}
          >
            {musica.name}
          </CharacterCard>
          <ButtonLixeira onClick={() => this.deletePlaylist(musica.id)}>
            <img src={lixeira} alt="lixeira" />
          </ButtonLixeira>
        </CardDiv>
      );
    });

    return (
      <MainContainer>
        <h1>Suas Playlists</h1>
        <ul>
        {mostrarLista}
        </ul>
        <ButtonList onClick={() => this.props.goPagina("criarPlaylist")}>
          Criar Playlist
        </ButtonList>
        
      </MainContainer>
    );
  }
}

export default VisualizarPlaylist;