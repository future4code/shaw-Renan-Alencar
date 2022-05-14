import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../../constants/urls'
import {MainContainer, Card, Usuario, Mensagem, DivButtons, DivCurtir, IMGS, ButtonComentarios} from './styled'
import comentario from '../../assets/comentario.png'
import curtir from '../../assets/positivo.png'
import descurtir from '../../assets/negativo.png'
import { useNavigate} from 'react-router-dom';
import { HEADER } from '../../constants/authotization'
import { GetRequest } from '../../hooks/useForm'
import { detalhesPost } from '../../routes/Coordinator'


const Post = () => {
  const navigate = useNavigate();
  const [update, setUpdate] = React.useState(false)
  const { listPost } = GetRequest(update)
 
  const Curtir = (id) => {
    const body = { direction: 1 };
    axios.post(`${BASE_URL}/posts/${id}/votes`, body, HEADER).then((res) => {
      console.log(res.data);
      setUpdate(!update)
    });
  };

  const Descurtir = (id) => {
    const body = { direction: -1 };
    axios.put(`${BASE_URL}/posts/${id}/votes`, body, HEADER).then((res) => {
      setUpdate(!update)
    });
  };

  return (
    <MainContainer>
      {listPost &&
        listPost.map((post) => {
          return (
            <Card key={post.id}>
              <Usuario>Enviado por: {post.username}</Usuario>
              <Mensagem>{post.body}</Mensagem>
              <DivButtons>
                <DivCurtir>
                  <IMGS onClick={() => Curtir(post.id)} src={curtir} alt="curtir"/>
                  {post.voteSum}
                  <IMGS onClick={() => Descurtir(post.id)} src={descurtir} alt="descurtir"/>
                </DivCurtir>
                <ButtonComentarios onClick={() => detalhesPost(navigate, post.id)}>
                  <IMGS src={comentario} alt="comentarios" />
                  {post.commentCount}
                </ButtonComentarios>
              </DivButtons>
            </Card>
          );
        })}
      
    </MainContainer>
  );
}

export default Post