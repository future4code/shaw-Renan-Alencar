// import React from "react";
// import axios from "axios";
// import { BASE_URL } from "../../constants/urls"
// import { HEADERS } from "../../constants/headers "

// class AddMusica extends React.Component{

//   state = {
//     inputNome:"",
//     inputCantor: "",
//     inputURL: "",
//   }

//   addTrackToPlaylist = () => {
//     const url = `${BASE_URL}/${this.props.idPlaylist}/tracks`
//     const body = {
//       "name": this.state.inputNome, 
//       "artist": this.state.inputCantor,
//       "url": this.state.inputURL
//   }
//     axios.post(url, body, HEADERS)
//     .then((res) => {
//       this.props.getPlaylistTracks();
//       this.setState({ inputNome: "", 
//       inputCantor: "", 
//       inputURL: "" });
//     })
//     .catch((err) => {
//       alert(err.response)
//     })
//   }

//   onChangeNome = (event) => {
//     this.setState({ inputNome: event.target.value})
//   }
//   onChangeCantor = (event) => {
//     this.setState({ inputCantor: event.target.value})
//   }
//   onChangeURL = (event) => {
//     this.setState({ inputURL: event.target.value})
//   }

//   render() {

//     return (
//       <div>
//         <p>Adicionar uma música</p>
//         <form>
//           <input
//             placeholder="Nome da Musica"
//             value={this.state.inputNome}
//             onChange={this.onChangeNome}
//           />

//           <input
//             placeholder="Nome do Artista ou Banda"
//             value={this.state.inputCantor}
//             onChange={this.onChangeCantor}
//           />

//           <input
//             placeholder="Link música"
//             value={this.state.inputURL}
//             onChange={this.onChangeURL}
//           />
//         </form>

//         <button onClick={this.addTrackToPlaylist}>Adicionar</button>
//       </div>
//     );
//   }
// }

// export default AddMusica;