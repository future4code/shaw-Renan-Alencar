import React from "react";
import Header from "../../components/Header/Header";
import {MainCotainer, H1, Form, ButtonCadastrar, P, DivTermo, Checkbox, PTermo,} from "./styled";
import TextField from "@mui/material/TextField";
import { useForm } from "../../hooks/useForm";
import axios from 'axios'
import {BASE_URL} from '../../constants/urls'
import { useNavigate } from "react-router-dom";

const Cadastro = () => {
  const navigate = useNavigate();
  const { form, onChange, clean } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    axios.post(`${BASE_URL}/users/signup`, form)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      clean();
      navigate('/posts');
    })
    .catch((err) => {
      alert("Houve um erro, tente novamente!")
    })
  };


  return (
    <MainCotainer>
      <Header />
      <H1>Olá, boas vindas ao LabEddit!</H1>

      <Form onSubmit={onSubmitForm}>
        <TextField
          label={"Nome de usuário"}
          name={"username"}
          value={form.username}
          onChange={onChange}
          margin={"dense"}
          fullWidth
          required
        />
        <TextField
          label={"E-mail"}
          name="email"
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
          pattern={"^.{8,30}"}
          title={"A senha deve ter no mínimo 8 caracteres e no máximo 30"}
        />

        <P>
          Ao continuar, você concorda com o nosso Contrato de usuário e nossa
          Política de Privacidade
        </P>
        <DivTermo>
          <Checkbox type="checkbox" />
          <PTermo>Eu concordo em receber emails sobre coisas legais</PTermo>
        </DivTermo>
        <ButtonCadastrar>Cadastrar</ButtonCadastrar>
      </Form>
    </MainCotainer>
  );
};

export default Cadastro;
