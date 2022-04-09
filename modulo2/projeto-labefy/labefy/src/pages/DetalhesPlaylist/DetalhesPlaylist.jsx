import React from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls"
import { HEADERS } from "../../constants/headers "
import  AddMusica  from "../../components/AddMusica"


class DetalhesPlaylist extends React.Component{

  state={
    arrayMusicas: [],
    idMusica: '',
  }

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = () => {
    const url = `${BASE_URL}/${this.props.idPlaylist}/tracks`
    axios.get(url, HEADERS)
    .then((res) => {
      this.setState({ arrayMusicas: res.data.result.tracks})
    })
    .catch((err) => {
      alert(err.response)
    })
  }

    removeTrackFromPlaylist = (id) => {
      const url = `${BASE_URL}/${this.props.idPlaylist}/tracks/${id}`
      axios.delete(url, HEADERS)
      .then((res) => {
        this.getPlaylistTracks();
        alert("Musica deletada com sucesso!")
      })
      .catch((err) => {
        alert(err.response)
      })
    }

  render() {
    const mostrarMusicas = this.state.arrayMusicas.map((musica) => {
      return <li key={musica.id}>
        <span>{musica.name}</span>
        <span><audio src={musica.url} type="audio/mp3" controls="controls"></audio></span>
        <button onClick={() => this.removeTrackFromPlaylist(musica.id)}>X</button> 
      </li>
    })
    return (
      <div>
        <ul>
        <h2>{this.props.nomePlaylist}</h2>
        {mostrarMusicas}
        </ul>
        <AddMusica idPlaylist={this.props.idPlaylist} getPlaylistTracks={this.getPlaylistTracks}/>
        <button onClick={() => this.props.goPagina("visualizarPlaylist")}>Visualizar PlayList</button>
        <button onClick={() => this.props.goPagina("criarPlaylist")}>Criar Playlist</button>
      </div>
    )
  }
}

export default DetalhesPlaylist;