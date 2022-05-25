import React from 'react'
import Header from '../../components/Header/Header'
import {MainContainer, Comentario, Button,Card, Usuario, Mensagem, DivButtons,DivCurtir, IMGS,ButtonComentarios  } from './styled'
import { logout } from '../../routes/Coordinator'
import { useNavigate, useParams } from 'react-router-dom';
import { GetRequest, GetComentario, useForm } from '../../hooks/useForm'
import comentario from '../../assets/comentario.png'
import curtir from '../../assets/positivo.png'
import descurtir from '../../assets/negativo.png'
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';
import { HEADER } from '../../constants/authotization';
import { useProtectedPage } from '../../hooks/useProtectedPage';

const DetalhesPost = () => {
  useProtectedPage();
  const {form, onChange, clean} = useForm({body: ''});
  const params = useParams()
  const [update, setUpdate] = React.useState(false)
  const { listPost } = GetRequest(update);
  const { comments } = GetComentario(params.id, update)

  //filtrar para pegar apenas o post selecionado para exibir na tela
  const post = listPost && listPost.filter((post) => {
    return post.id === params.id
  })

  const onSubmitComment = () => {
    axios.post(`${BASE_URL}/posts/${params.id}/comments`, form ,HEADER)
    .then((res) => {
      alert("Post criado com sucesso!")
      setUpdate(!update)
      clean()
    })
    .catch((err) => {
      console.log("Houve um erro, tenta novamente")
    })
  }

  const Curtir = (opcao, id) => {
    const body = { direction: 1 };
    axios.post(`${BASE_URL}/${opcao}/${id}/votes`, body, HEADER).then((res) => {
      console.log(res.data);
      setUpdate(!update)
    });
  };

  const Descurtir = (opcao, id) => {
    const body = { direction: -1 };
    axios.put(`${BASE_URL}/${opcao}/${id}/votes`, body, HEADER).then((res) => {
      setUpdate(!update)
    });
  };

  const ListaPost =  post &&
    post.map((post) => {
      return (
        <Card  key={post.id}>
          <Usuario><strong>Enviado por:</strong> {post.username}</Usuario>
          <Mensagem>{post.body}</Mensagem>
          <DivButtons>
            <DivCurtir>
              <IMGS onClick={() => Curtir('posts', post.id)} src={curtir} alt="curtir" />
              {post.voteSum}
              <IMGS
                onClick={() => Descurtir('posts', post.id)}
                src={descurtir}
                alt="descurtir"
              />
            </DivCurtir>
            <ButtonComentarios>
              <IMGS src={comentario} alt="comentarios" />
              {post.commentCount}
            </ButtonComentarios>
          </DivButtons>
        </Card>
      );
    })

  const ListaComentarios = comments &&
    comments.map((comment) => {
      return (
        <Card key={comment.id}>
          <Usuario><strong>Enviado por:</strong> {comment.username}</Usuario>
          <Mensagem>{comment.body}</Mensagem>
          <DivButtons>
            <DivCurtir>
              <IMGS onClick={() => Curtir('comments', comment.id)} src={curtir} alt="curtir"/>
              {comment.voteSum}
              <IMGS onClick={() => Descurtir('comments', comment.id)} src={descurtir} alt="descurtir"/>
            </DivCurtir>
          </DivButtons>
        </Card>
      );
    })


  return (
    <div>
      <Header botao={{ function: logout, text: "Sair" }} />
      <MainContainer>
        {ListaPost}
        <Comentario  placeholder="Adiconar um comentário" 
        name={"body"}
        value={form.body}
        onChange={onChange}/>
        <Button onClick={onSubmitComment}>Responder</Button>
        {ListaComentarios}
      </MainContainer>
    </div>
  );
}

export default DetalhesPost