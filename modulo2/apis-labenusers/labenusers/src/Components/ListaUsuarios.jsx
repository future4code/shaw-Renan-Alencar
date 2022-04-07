import React from "react";
import axios from "axios";
import DetalhesUsuario from "./DetalhesUsuario";

const headers = {
  headers: {
    Authorization: "renan-alencar-shaw",
  },
};

class ListaUsuarios extends React.Component {
  state = {
    listaUsuarios: [],
    trocarPagina: "listaUsuarios",
    idUsuario: "",
  };

  componentDidMount() {
    this.listaUsuarios();
  }

  listaUsuarios = async () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    try {
      const response = await axios.get(url, headers);
      this.setState({ listaUsuarios: response.data });
    } catch {
      alert("Ocorreu um erro!");
    }
  };

  deleteUser = (id) => {
    if (window.confirm("Tem certeza que deseja deletar?")) {
      if (this.state.idUsuario === "") {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
        axios
          .delete(url, headers)
          .then(() => {
            alert("usuário deletado");
            this.listaUsuarios();
          })
          .catch(() => {
            alert("usuário não deletado");
          });
      } else {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.idUsuario}`;
        axios
          .delete(url, headers)
          .then(() => {
            alert("usuário deletado");
            this.setState({ trocarPagina: "listaUsuarios" });
            this.listaUsuarios();
          })
          .catch(() => {
            alert("usuário não deletado");
          });
      }
    }
  };

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

  render() {
    const mostrarLista = this.state.listaUsuarios.map((user) => {
      return (
        <li key={user.id}>
          <span onClick={() => this.detalhesUsuario(user.id)}>{user.name}</span>
          <button onClick={() => this.deleteUser(user.id)}>deletar</button>
        </li>
      );
    });

    return (
      <div>
        {this.state.trocarPagina === "listaUsuarios" ? (
          <div>
            <button onClick={this.props.criarUsuario}>Mudar Tela</button>
            <h2>Lista de Usuários</h2>
            {mostrarLista}
          </div>
        ) : (
          <DetalhesUsuario
            idUsuario={this.state.idUsuario}
            detalhesUsuario={this.detalhesUsuario}
            deleteUser={this.deleteUser}
          />
        )}
      </div>
    );
  }
}

export default ListaUsuarios;
