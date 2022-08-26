import React from "react";
import { Box, TextField } from "@mui/material";
import * as Style from "./styled";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../Constants/Url";
import { RegisterDTO } from "../../Types/RegisterDTO";

const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");

  const onChangeEmail = (event: any) => {
    setEmail(event.target.value);
  };

  const onSubmitLogin = async () => {
    const body: RegisterDTO = { email };
    await axios
      .post(`${BASE_URL}/register`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.user.token as string);
        navigate("/list");
      })
      .catch((err) => {
        alert(err.response.data.error.message);
      });
  };
  return (
    <Style.MainContainer>
      <h1>Dog Breed</h1>
      <p>Faça seu registro para admirar os cachorros!</p>
      <div>
        <Box
          sx={{
            width: 390,
          }}
        >
          <TextField
            className="text"
            fullWidth
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            color="success"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
          />
        </Box>
      </div>
      <Style.Button onClick={onSubmitLogin}>Registrar</Style.Button>
    </Style.MainContainer>
  );
};

export default Register;
