import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "renan-alencar-shaw",
  },
};

class ListaUsuarios extends React.Component {
  state = {
    listaUsuarios: [],
  };

  componentDidMount() {
    this.listaUsuarios();
  }

  listaUsuarios = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios.get(url, headers).then((res) => {
      this.setState({ listaUsuarios: res.data });
    });
  };

  deleteUser = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;
    axios
      .delete(url, headers)
      .then(() => {
        alert("usuário deletado");
      })
      .catch(() => {
        alert("usuário não deletado");
      });
  };

  render() {
    const mostrarLista = this.state.listaUsuarios.map((user) => {
      return (
        <li key={user.id}>
          {user.name}
          <button onClick={() => this.deleteUser(user.id)}>deletar</button>
        </li>
      );
    });
    return (
      <div>
        {mostrarLista}
      </div>
    );
  }
}

export default ListaUsuarios;
