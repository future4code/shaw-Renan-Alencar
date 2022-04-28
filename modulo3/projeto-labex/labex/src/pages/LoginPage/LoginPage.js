import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { goToAdminHome, goBack } from "../../routes/coordinator";

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
        console.log(res.data.token);
        localStorage.setItem('token', res.data.token)
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <div>
      <h2>LoginPage</h2>
      <div>
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
      </div>
      <button onClick={onSubmitLogin}>Logar</button>
      <button onClick={() => goToAdminHome(navigate)}>IR Admn Home</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default LoginPage;
