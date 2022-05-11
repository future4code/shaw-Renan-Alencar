import React from "react";
import Header from "../../components/Header/Header";
import {MainCotainer, H1, Form, ButtonCadastrar, P, DivTermo, Input, PTermo,} from "./styled";
import TextField from "@mui/material/TextField";
import { useForm } from "../../hooks/useForm";

const Cadastro = () => {
  const { form, onChange, clean } = useForm({
    username: "",
    email: "",
    password: "",
  });

  const onSubmitForm = () => {};

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
        />
        <TextField
          label={"E-mail"}
          name={"email"}
          value={form.email}
          onChange={onChange}
          margin={"dense"}
          fullWidth
        />
        <TextField
          label={"Senha"}
          name={"password"}
          value={form.email}
          onChange={onChange}
          margin={"dense"}
          fullWidth
        />
      </Form>

      <P>
        Ao continuar, você concorda com o nosso Contrato de usuário e nossa
        Política de Privacidade{" "}
      </P>
      <DivTermo>
        <Input type="checkbox" />
        <PTermo>Eu concordo em receber emails sobre coisas legais</PTermo>
      </DivTermo>
      <ButtonCadastrar>Cadastrar</ButtonCadastrar>
    </MainCotainer>
  );
};

export default Cadastro;
