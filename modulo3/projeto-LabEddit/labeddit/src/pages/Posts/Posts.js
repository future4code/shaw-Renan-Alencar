import React from 'react'
import Header from "../../components/Header/Header";
import {MainContainer, Post, Button} from './styled'

const Posts = () => {
  return (
    <div>
      <Header />
      <MainContainer>
      <Post type="text" placeholder ={'Escreva seu post...'}/>
      <Button>Postar</Button>

      <p>Component posts..</p>
      </MainContainer>
    </div>
  )
}

export default Posts