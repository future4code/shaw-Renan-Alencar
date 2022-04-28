import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from "../../routes/coordinator";
import { MainContainer } from "./styled";

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      ApplicationFormPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <div>
        <h1>Faça sua inscrição</h1>
        <select name="" id="">
          <option value="">Selecione uma viagem</option>
        </select>
        <ul>
          <input placeholder="Nome" />
          <input placeholder="Idade" />
          <input placeholder="Profissão" />
          <input placeholder="País" />
          <input placeholder="Texto Candidatura" />
          <button >Enviar</button>
        </ul>
      </div>
    </MainContainer>
  );
};

export default ApplicationFormPage;
