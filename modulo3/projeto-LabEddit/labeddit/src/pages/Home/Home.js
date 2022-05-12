import React from 'react'
import Header from "../../components/Header/Header";
import Post from '../../components/Post/Post';
import {MainContainer, InputPost, Button} from './styled'
import {useProtectedPage} from '../../hooks/useProtectedPage'

const Posts = () => {
  useProtectedPage();
  return (
    <div>
      <Header />
      <MainContainer>
      <InputPost type="text" placeholder ={'Escreva seu post...'}/>
      <Button>Postar</Button>

      <Post />
      </MainContainer>
    </div>
  )
}

export default Posts