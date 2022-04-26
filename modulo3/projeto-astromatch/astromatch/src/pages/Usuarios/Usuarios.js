import React, { useEffect } from 'react'
import axios from 'axios';
import { Base_url, Gif } from "../../constants/Url"
import ChoosePerson from '../../components/ChoosePerson/ChoosePerson';
import CardUsuario from '../../components/CardUsuario/CardUsuario';


const Usuarios = () => {

  const [ perfil, setPerfil] = React.useState([])
  const [ atualizar, setAtualizar] = React.useState('false');
  const [ isLoagind, setIsLoading] = React.useState(false)

  
  useEffect (() => {
    setIsLoading(true);
    axios.get(`${Base_url}/person`)
    .then((res) => {
      setPerfil(res.data.profile)
      setIsLoading(false);
    })
    .catch((err) => {
      alert("Houve um erro, tenta novamente")
      setIsLoading(false);
    })
  }, [atualizar])

  //Ao clicar no botão de Match ou recusar o match, ele muda o status do atualizar e renderiza a pagina
  const atualizando = () => {
    setAtualizar(!atualizar)
  }

  return (
    <div>
      <div>
        {isLoagind && <img src={Gif} alt="loading" />  }
        {!isLoagind && <CardUsuario perfil={perfil} />} 
        <ChoosePerson atualizando={atualizando} id={perfil.id}/>
      </div>
    </div>
  )
}

export default Usuarios