import React from 'react'
import styled from "styled-components"

const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px black;

  img{
    width: 200px;
  }
`

const CardUsuario = (props) => {
  return (
    <div>
      <Lista>
          <p><img src={props.perfil.photo} alt="Foto do usuário" /> </p>
          <p>{props.perfil.name}</p>
          <p>{props.perfil.age}</p>
          <p>{props.perfil.bio}</p>
        </Lista>
    </div>
  )
}

export default CardUsuario