import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, goToLoignPage, goHome } from "../../routes/coordinator";
import { MainForm, ButtonDiv } from "./styled";
import { useParams } from "react-router-dom";
import { useRequestData } from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/Base_url";
import { PAISES } from "../../constants/Paises";

import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { Header } from "../Header/Header";

const ApplicationFormPage = () => {
  const navigate = useNavigate();
  const params = useParams();
  const getTrips = useRequestData(`${BASE_URL}/trips`, {});
  const { form, handleChange, cleanFields } = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  //verifica se a getTrips não está vazio e faz um filter pelo ID da viagem e depois um map retornando apenas o nome da viagem.
  const tripSelected =
    getTrips.trips &&
    getTrips.trips
      .filter((viagem) => {
        return viagem.id === params.id;
      })
      .map((viagem) => {
        return viagem.name;
      });

  const enviar = (event) => {
    event.preventDefault();
    axios
      .post(`${BASE_URL}/trips/${params.id}/apply`, form)
      .then((res) => {
        console.log(res.data);
        cleanFields();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  //faz um map no array de paises recebido de constants
  const listPais = PAISES.map((pais) => {
    return (
      <option key={pais.ordem} value={pais.nome}>
        {pais.nome}
      </option>
    );
  });

  return (
    <div>
      <Header
        first={{ function: goHome, text: "Inicio" }}
        second={{ function: goToLoignPage, text: "Login" }}
      />
      <MainForm>
        <h1>Faça sua inscrição</h1>
        <div>
          <form onSubmit={enviar}>
            <h2>Viagem escolhida: {tripSelected}</h2>
            <input
              value={form.name}
              name="name"
              onChange={handleChange}
              placeholder={"Nome"}
              required
              pattern={"^.{3,}"}
              title={"O nome deve ter no mínimo 3 letras"}
            />
            <input
              value={form.age}
              name="age"
              onChange={handleChange}
              placeholder={"Idade"}
              required
              type="number"
              min={18}
            />
            <input
              value={form.profession}
              name="profession"
              onChange={handleChange}
              placeholder={"Profissão"}
              required
              pattern={"^.{10,}"}
              title={"A profissão deve ter no mínimo  10 caracteres"}
            />
            <select
              value={form.country}
              name="country"
              onChange={handleChange}
              required
            >
              <option value="">Seleciona um país</option>
              {listPais}
            </select>
            <input
              value={form.applicationText}
              name="applicationText"
              onChange={handleChange}
              placeholder={"Texto Candidatura"}
              required
              pattern={"^.{30,}"}
              title={"A candidatura deve ter no mínimo  30 caracteres"}
            />
            <ButtonDiv>
              <button>Enviar</button>
              <button onClick={() => goBack(navigate)}>Voltar</button>
            </ButtonDiv>
          </form>
        </div>
      </MainForm>
    </div>
  );
};

export default ApplicationFormPage;
