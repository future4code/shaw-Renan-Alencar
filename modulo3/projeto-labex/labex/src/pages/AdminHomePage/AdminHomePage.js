import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goToDetailsPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Base_url";
import {
  useRequestData,
  useProtectedPage,
  useRequestDelete,
} from "../../hooks/useRequestData";
import { Trips } from "./styled";
import axios from "axios";

const AdminHomePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});
  // const deletarTrip = useRequestDelete()

  const DeleteTrip = (id) => {
    const HEADER = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .delete(`${BASE_URL}/trips/${id}`, HEADER)
      .then((res) => {
        navigate("/login");
        console.log("deletado");
      })
      .catch((err) => {
        console.log("Falha ao deletar");
      });
  };

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <Trips key={trip.id}>
          <div>
            <p onClick={() => goToDetailsPage(navigate, trip.id)}>
              Nome {trip.name}
            </p>
            <button onClick={() => DeleteTrip(trip.id)}>excluir</button>
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
      <h2>AdminHomePage</h2>

      <button onClick={() => goToCreatTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => navigate("/")}>Voltar</button>
      <button onClick={logout}>Logout</button>
      {trips}
    </div>
  );
};

export default AdminHomePage;
