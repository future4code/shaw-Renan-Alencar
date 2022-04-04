import React from 'react';

import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
  margin-bottom: 10px;

  img{
    width: 30px;
    margin-right: 10px;
  }

  h4{
    padding-right: 5px;
  }
`

function CarPequeno(props){
  return(
    <ContainerDiv>
      <img src={props.imagem} />
      <h4>{props.info}</h4>
      <p>{props.valor}</p>
    </ContainerDiv>
  )
}

export default CarPequeno;