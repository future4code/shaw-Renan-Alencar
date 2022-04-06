import React from "react";
import axios from "axios";

const headers = {
  headers: {
    Authorization: "renan-alencar-shaw",
  },
};

class CriarUsuario extends React.Component {
  state = {
    inputNome: "",
    inputEmail: "",
  };

  onChangeNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUser = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    const body = {
      name: this.state.inputNome,
      email: this.state.inputEmail,
    };
    axios
      .post(url, body, headers)
      .then(() => {
        alert(`Usuário ${this.state.inputNome} criado com sucesso!`);
        this.setState({ inputNome: "", inputEmail: "" });
      })
      .catch(() => {
        alert("Erro, tente novamente!");
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.props.listaUsuarios}>Mudar Tela</button>
        <h2>Cadastrar Usuário</h2>
        <input
          placeholder="Usuário"
          value={this.state.inputNome}
          onChange={this.onChangeNome}
        />
        <input
          placeholder="E-mail"
          value={this.state.inputEmail}
          onChange={this.onChangeEmail}
        />
        <button onClick={this.createUser}>Criar Usuário</button>
      </div>
    );
  }
}

export default CriarUsuario;