import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers "

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
    axios.delete(`${BASE_URL}/${id}`, HEADERS)
    .then((res) => {
      alert("PlayLista deletada!")
      this.getAllPlaylists()
    })
    .catch((err) => {
      alert(err.response)
    })
  }

  detalhesMusica = (id, name) => {
    this.props.pegaIdPlaylist(id);
    this.props.pegarNomePlaylist(name);
    this.props.goPagina("detalhes");
  }

  render() {
    const mostrarLista = this.state.arrayPlaylist.map((musica) => {
      return (
        <li key={musica.id}>
          <span onClick={() => this.detalhesMusica(musica.id, musica.name)}>{musica.name}</span> 
          <button onClick={() => this.deletePlaylist(musica.id)}>X</button>
        </li>
      );
    });

    return (
      <div>
        <p>VisualizarPlaylist</p>
        {mostrarLista}
        
        <button onClick={() => this.props.goPagina("criarPlaylist")}>
          Criar Playlist
        </button>
        
      </div>
    );
  }
}

export default VisualizarPlaylist;