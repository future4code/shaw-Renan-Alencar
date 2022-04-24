import React from "react";
import { ContainerHeader } from "./styled";
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

export const Header = (props) => {
  const inicial = () => {
    props.onChangePagina("usuarios");
  };

  const matches = () => {
    props.onChangePagina("matches");
  };

  return (
    <ContainerHeader>
      <button onClick={inicial}> <HomeOutlinedIcon fontSize="large"/> </button>
      <p>AstroMatch</p>
      <button onClick={matches}><ListAltOutlinedIcon fontSize="large"/></button>
    </ContainerHeader>
  );
};
