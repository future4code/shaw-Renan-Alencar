import React from 'react'
import Header from '../../components/Header/Header'
import {MainContainer, Comentario, Button} from './styled'

const DetalhesPost = () => {
  return (
    <div>
      <Header />
      <MainContainer>
      <p>Components post...</p>
      <Comentario type="text" placeholder='Adiconar um comentário'/>
      <Button>Responder</Button>
      <p>Components respostas..</p>

      </MainContainer>
    </div>
  )
}

export default DetalhesPost