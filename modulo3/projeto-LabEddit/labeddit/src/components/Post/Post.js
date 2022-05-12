import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../constants/urls'
import {MainContainer, Card, Usuario, Mensagem, DivButtons, DivCurtir, IMGS, ButtonComentarios} from './styled'
import comentario from '../../assets/comentario.png'
import curtir from '../../assets/positivo.png'
import descurtir from '../../assets/negativo.png'
import DetalhesPost from '../../pages/DetalhesPost/DetalhesPost'
import { useNavigate } from 'react-router-dom';
import { HEADER } from '../../constants/authotization'


const Post = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = React.useState([])

 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Curtir = (id) => {
    const body = { direction: 1 };
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, HEADER).then((res) => {
      console.log(res.data);
    });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const Descurtir = (id) => {
    const body = { direction: -1 };
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, HEADER).then((res) => {
    });
  };


  useEffect(() =>  {
    axios.get(`${BASE_URL}/posts`, HEADER)
    .then((res) => {
      setPosts(res.data)
    })
    .catch((err) => {
      alert("House um erro, tenta novamente!")
    })
  }, [Curtir, Descurtir])

  // onClick={() => Curtir(post.id)} 
  
  const listPost = posts.map((post) => {
    return (
      <Card key={post.id}>
        <Usuario>Enviado por: {post.username}</Usuario>
        <Mensagem>{post.body}</Mensagem>
        <DivButtons>
          <DivCurtir>
            <IMGS onClick={() => Curtir(post.id)}  src={curtir} alt="curtir" />
            {post.voteSum}
            <IMGS onClick={() => Descurtir(post.id)} src={descurtir} alt="descurtir" />
          </DivCurtir>
          <ButtonComentarios>
            <IMGS src={comentario} alt="comentarios" />
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