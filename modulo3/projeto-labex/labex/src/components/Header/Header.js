import React from "react";
import { MainContainer, Buttons } from "./styled";
import { useNavigate } from 'react-router-dom';
import { goHome  } from '../../routes/coordinator'


export const Header = (props) => {
     const navigate = useNavigate()

  return (
    <MainContainer>
      <h1 onClick={() => goHome(navigate)}>LabeX</h1>
      <Buttons>
        <button onClick={()=> props.first.function(navigate)}>{props.first.text}</button>
        <button onClick={() => props.second.function(navigate)}>{props.second.text}</button>
      </Buttons>
    </MainContainer>
  );
};
