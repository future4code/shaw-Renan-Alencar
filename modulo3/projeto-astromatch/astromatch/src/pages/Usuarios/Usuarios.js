import React, { useEffect } from 'react'
import axios from 'axios';
import { Base_url } from "../../constants/Url"
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

const Usuarios = () => {

  const [ perfil, setPerfil] = React.useState([])

  useEffect (() => {
    axios.get(`${Base_url}/person`)
    .then((res) => {
      setPerfil(res.data.profile)
    })
    .catch((err) => {
      alert("Houve um erro, tenta novamente")
    })
  }, [])

    console.log(perfil)
  return (
    <div>
      <div>
        <Lista>
          <p><img src={perfil.photo} alt="Foto do usuário" /> </p>
          <p>{perfil.name}</p>
          <p>{perfil.age}</p>
          <p>{perfil.bio}</p>
        </Lista>
      </div>
    </div>
  )
}

export default Usuarios