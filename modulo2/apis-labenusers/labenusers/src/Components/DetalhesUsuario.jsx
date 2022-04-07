import axios from "axios";
import React from "react";

const headers = {
  headers: {
    Authorization: "renan-alencar-shaw",
  },
};

class DetalhesUsuario extends React.Component {
  state = {
    nome: "",
    email: "",
  };

  componentDidMount() {
    this.mostrarDetalhes();
  }

  detalhesUsuario = (id) => {
    switch (this.state.trocarPagina) {
      case "detalhesUsuarios":
        return this.setState({ trocarPagina: "listaUsuarios" });
      case "listaUsuarios":
        return this.setState({
          idUsuario: id,
          trocarPagina: "detalhesUsuarios",
        });
      default:
    }
  };

  mostrarDetalhes = async () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.idUsuario}`;
    try {
      const response = await axios.get(url, headers);
      this.setState({ nome: response.data.name, email: response.data.email });
    } catch (error) {
      alert("Ocorreu um erro!");
    }
  };

  render() {
    return (
      <div>
        <h2>Detalhes usuário</h2>
        <p>{this.state.nome}</p>
        <p>{this.state.email}</p>
        <button onClick={this.props.detalhesUsuario}>Voltar</button>
        <button onClick={this.props.deleteUser}>Deletar</button>

      </div>
    );
  }
}

export default DetalhesUsuario;
