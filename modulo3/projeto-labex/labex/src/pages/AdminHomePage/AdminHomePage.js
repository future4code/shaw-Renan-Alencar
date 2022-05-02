// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goToDetailsPage, logout } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData, useProtectedPage } from "../../hooks/useRequestData";
import { Trips, MainCoainter } from "./styled";
import axios from "axios";
import { Header } from "../Header/Header";

const AdminHomePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const DeleteTrip = (id) => {
    const HEADER = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    if(window.confirm("Tem certeza que deseja deletar essa viagem?")){
      axios
        .delete(`${BASE_URL}/trips/${id}`, HEADER)
        .then((res) => {
          navigate("/login");
          alert("Viagem deletada com sucesso!")
        })
        .catch((err) => {
          alert("Houve um erro, tente novamente!")
        });
    }
  };

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <Trips key={trip.id}>
          <div>
            <p onClick={() => goToDetailsPage(navigate, trip.id)}>
              {trip.name}
            </p>
          </div>
          <div>
            <button onClick={() => DeleteTrip(trip.id)}>X</button>
          </div>
        </Trips>
      );
    });

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <Header 
      first={{function: goToCreatTrip, text: "Criar Viagem",}}
      second={{function: logout, text: "Sair",}}
      />
      <MainCoainter>

      <h2>Área Administrativa</h2>

      {/* <button onClick={() => goToCreatTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => navigate("/")}>Voltar</button> */}
      {trips}
      </MainCoainter>
    </div>
  );
};

export default AdminHomePage;
