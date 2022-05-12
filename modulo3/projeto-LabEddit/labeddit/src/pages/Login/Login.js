import React, { useEffect } from 'react'
import fotoLogo from '../../assets/fotoLogo.JPG'
import { MainContainer, Logo, H1, P, Form, ButtonContinuar, ButtonConta } from './styled'
import TextField from '@mui/material/TextField';
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';

const Login = () => {
  const navigate = useNavigate();
  const {form, onChange, clean} = useForm({email: '', password: ''})

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}/users/login`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clean();
      navigate('/posts');
    })
    .catch((err) => {
      alert("E-mail ou senha incorretos!")
    })
  }

  return (
    <MainContainer>
      <Logo src={fotoLogo} alt="logo labeddit" />
      <H1>LabEddit</H1>
      <P>Um projeto de rede social</P>

      <Form onSubmit={onSubmitForm}>
        <TextField
          label={"E-mail"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          margin={"dense"}
          fullWidth
          required
        />
        <TextField
          label={"Senha"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          margin={"dense"}
          fullWidth
          required
        />
      <ButtonContinuar>Continuar</ButtonContinuar>
      </Form>
      <ButtonConta onClick={() => navigate('/cadastro')}>Criar Conta</ButtonConta>


    </MainContainer>
  );
}

export default Login