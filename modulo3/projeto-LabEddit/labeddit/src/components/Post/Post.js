import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'
import {MainContainer, Card, Usuario, Mensagem, DivButtons, DivCurtir, IMGS, ButtonComentarios} from './styled'
import comentario from '../../assets/comentario.png'
import positivo from '../../assets/positivo.png'
import negativo from '../../assets/negativo.png'
import DetalhesPost from '../../pages/DetalhesPost/DetalhesPost'
import { useNavigate } from 'react-router-dom';


const Post = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = React.useState([])
  const HEADER = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  useEffect(() =>  {
    axios.get(`${BASE_URL}/posts`, HEADER)
    .then((res) => {
      setPosts(res.data)
    })
    .catch((err) => {
      alert("House um erro, tenta novamente!")
    })
  }, [])

  const clicou = () =>{
    console.log("clicou")
  }

  const listPost = posts.map((post) => {
    return (
      <Card key={post.id}>
        <Usuario>
          Enviado por: {post.username}
        </Usuario>
        <Mensagem>
          {post.body}
        </Mensagem>
        <DivButtons>
          <DivCurtir>
            <IMGS src={positivo} alt="curtir" />
            {post.voteSum}
            <IMGS src={negativo} alt="descurtir" />
          </DivCurtir>
          <ButtonComentarios>
            <IMGS onClick={clicou} src={comentario} alt="comentarios" />
            {post.commentCount}
          </ButtonComentarios>
        </DivButtons>
      </Card>
    );
  });

  return (
    <MainContainer>
      {listPost}
    </MainContainer>
  );
}

export default Post