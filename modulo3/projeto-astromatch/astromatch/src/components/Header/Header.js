import React from "react";

export const Header = (props) => {

  const inicial = () => {
    props.onChangePagina("usuarios")
  }

  const matches = () => {
    props.onChangePagina("matches")
  }

  return (
    <div>
      
      <button onClick={inicial}>Inicial</button>
      AstroMatch
      <button onClick={matches}>Matches</button>
    </div>
  );
};
