import React from 'react'
import fotoLogo from '../../assets/fotoLogo.JPG'
import { MainContainer, Logo, H1, P, Form, ButtonContinuar, ButtonConta } from './styled'
import TextField from '@mui/material/TextField';
import { useForm } from '../../hooks/useForm';

const Login = () => {
  const {form, onChange, clean} = useForm({email: '', password: ''})

  const onSubmitForm = () => {

  }

  return (
    <MainContainer>
      <Logo src={fotoLogo} alt="logo labeddit" />
      <H1>LabEddit</H1>
      <P>Um projeto de rede social</P>

      <Form onSubmit={onSubmitForm}>
        <TextField
          label={"Nome"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          margin={"dense"}
          fullWidth
        />
        <TextField
          label={"Senha"}
          name={"password"}
          value={form.password}
          onChange={onChange}
          margin={"dense"}
          fullWidth
        />
      </Form>

      <ButtonContinuar>Continuar</ButtonContinuar>
      <ButtonConta>Criar Conta</ButtonConta>

    </MainContainer>
  );
}

export default Login