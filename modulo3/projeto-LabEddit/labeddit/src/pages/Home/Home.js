import React, { useEffect } from 'react'
import Header from "../../components/Header/Header";
import Post from '../../components/Post/Post';
import {MainContainer, InputTitulo, InputPost, Button} from './styled'
import {useProtectedPage} from '../../hooks/useProtectedPage'
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { HEADER } from '../../constants/authotization';
import { useNavigate } from 'react-router-dom';

const Posts = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const {form, onChange, clean} = useForm({title: '', body: ''})

  const onSubmitPost = () => {
    axios.post(`${BASE_URL}/posts`, form ,HEADER)
    .then((res) => {
      console.log("ok")
      clean()
      // página não esta atualizando os posts novos

    })
    .catch((err) => {
      alert("Houve um erro, tenta novamente")
    })
  }

  useEffect(() => {
    
  },[form])

  return (
    <div>
      <Header />
      <MainContainer>
        <InputTitulo
          placeholder={"Titulo"}
          name={"title"}
          value={form.title}
          onChange={onChange}
        />
        <InputPost
          placeholder={"Escreva seu post..."}
          name={"body"}
          value={form.body}
          onChange={onChange}
        />
        <Button onClick={onSubmitPost}>Postar</Button>

        <Post />
      </MainContainer>
    </div>
  );
}

export default Posts