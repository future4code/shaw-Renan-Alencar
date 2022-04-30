import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack, logout, goHome } from "../../routes/coordinator";
import { useProtectedPage } from "../../hooks/useRequestData";
import { useForm } from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/Base_url";
import { Header } from "../Header/Header";

const CreateTripPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { form, handleChange, cleanFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  const createTrip = (event) => {
    event.preventDefault();
    const HEADER = {
      headers: {
        'auth': localStorage.getItem("token"),
      }
    };
    axios.post(`${BASE_URL}/trips`, form, HEADER)
    .then((res) => { 
      alert("Viagem criado com sucesso!")
      cleanFields();
    })
    .catch((err) => {
      alert("Houve um problema, tente novamente!")
    })
  };

  return (
    <div>
      <Header 
      first={{function: goHome, text: "Início",}}
      second={{function: logout, text: "Sair",}}
      />
      CreateTripPage
      <form onSubmit={createTrip}>
        <input
          value={form.name}
          name="name"
          onChange={handleChange}
          placeholder={"Nome"}
          required
          pattern={"^.{5,}"}
          title={"O nome deve ter no mínimo 5 letras"}
        />
        <input
          value={form.planet}
          name="planet"
          onChange={handleChange}
          placeholder={"planeta"}
          required
        />
        <input
          value={form.date}
          name="date"
          onChange={handleChange}
          placeholder={"date"}
          required
          type="date"
        />
        <input
          value={form.description}
          name="description"
          onChange={handleChange}
          placeholder={"description"}
          required
          pattern={"^.{30,}"}
          title={"A descrição deve ter no mínimo  30 caracteres"}
        />
        <input
          value={form.durationInDays}
          name="durationInDays"
          onChange={handleChange}
          placeholder={"Duração da Viagem em dias"}
          required
          type="number"
          min={50}
        />
        <button onClick={() => goBack(navigate)}>Voltar</button>
        <button>Criar</button>
      </form>
    </div>
  );
};

export default CreateTripPage;
