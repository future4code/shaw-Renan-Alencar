import React, { useEffect } from 'react'
import axios from 'axios';
import { Base_url } from "../../constants/Url"
import styled from "styled-components"
import ChoosePerson from '../../components/ChoosePerson/ChoosePerson';

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
  const [ atualizar, setAtualizar] = React.useState('false');

  
  useEffect (() => {
    axios.get(`${Base_url}/person`)
    .then((res) => {
      setPerfil(res.data.profile)
    })
    .catch((err) => {
      alert("Houve um erro, tenta novamente")
    })
  }, [atualizar])

  //Ao clicar no botão de Match ou recusar o match, ele muda o status do atualizar e renderiza a pagina
  const atualizando = () => {
    setAtualizar(!atualizar)
  }

  return (
    <div>
      <div>
        <Lista>
          <p><img src={perfil.photo} alt="Foto do usuário" /> </p>
          <p>{perfil.name}</p>
          <p>{perfil.age}</p>
          <p>{perfil.bio}</p>
        </Lista>
        <ChoosePerson atualizando={atualizando} id={perfil.id}/>
      </div>
    </div>
  )
}

export default Usuarios