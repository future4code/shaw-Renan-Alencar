import React from "react";
import ListaUsuarios from "./Components/ListaUsuarios";
import CriarUsuario from "./Components/CriarUsuario";


class App extends React.Component {
  state = {
    paginaExibicao: false,
  };

  trocarPagina = () => {
    this.setState({ paginaExibicao: !this.state.paginaExibicao });
  };

  render() {
    let pagina;

    switch (this.state.paginaExibicao) {
      case false:
        pagina = <CriarUsuario />;
        break;
      case true:
        pagina = <ListaUsuarios />;
        break;
      default:
    }

    return (
      <div>
        <button onClick={this.trocarPagina}>Mudar Tela</button>
        {pagina}
      </div>
    );
  }
}
export default App;
