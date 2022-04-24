import React, { useEffect } from 'react'
import axios from 'axios';
import { Base_url } from "../../constants/Url"
import ChoosePerson from '../../components/ChoosePerson/ChoosePerson';
import CardUsuario from '../../components/CardUsuario/CardUsuario';


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
        <CardUsuario perfil={perfil} />
        <ChoosePerson atualizando={atualizando} id={perfil.id}/>
      </div>
    </div>
  )
}

export default Usuarios