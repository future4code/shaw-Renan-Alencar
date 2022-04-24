import React from "react";
import { Header } from "./components/Header/Header";
import Matches from "./pages/Matches/Matches";
import Usuarios from "./pages/Usuarios/Usuarios";
import { MainContainer, DivContainer } from "./styled";

const App = () => {
  const [atualizarPagina, setAtualizarPagina] = React.useState("usuarios");

  const mudarPagina = () => {
    switch (atualizarPagina) {
      case "usuarios":
        return <Usuarios />;
      case "matches":
        return <Matches />;
      default:
        return <Usuarios />;
    }
  };

  const onChangePagina = (value) => {
    setAtualizarPagina(value);
  };
  return (
    <MainContainer>
      <DivContainer>
        <Header onChangePagina={onChangePagina} />
        {mudarPagina()}
      </DivContainer>
    </MainContainer>
  );
};

export default App;
