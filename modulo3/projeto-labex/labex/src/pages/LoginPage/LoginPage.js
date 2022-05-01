import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { goBack, goToListTrip, goHome } from "../../routes/coordinator";
import { Header } from "../Header/Header";
import { MainForm, ButtonDiv } from "./styled";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const onSubmitLogin = () => {
    const body = {
      email: email,
      password: senha,
    };
    axios
      .post(`${BASE_URL}/login`, body)
      .then((res) => {
        navigate("/admin/trips/list");
        localStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        alert("Login ou senha não autorizado");
      });
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/admin/trips/list");
    }
  });

  return (
    <div>
      <Header
        first={{ function: goToListTrip, text: "Viagens" }}
        second={{ function: goHome, text: "Início" }}
      />
      <MainForm>
        <h2>Área Administrativa</h2>
        <input
          placeholder="Login"
          type="email"
          value={email}
          onChange={onChangeEmail}
        />

        <input
          placeholder="Senha"
          type="senha"
          value={senha}
          onChange={onChangeSenha}
        />
        <ButtonDiv>
          <button onClick={onSubmitLogin}>Logar</button>
          <button onClick={() => goBack(navigate)}>Voltar</button>
        </ButtonDiv>
      </MainForm>
    </div>
  );
};

export default LoginPage;
