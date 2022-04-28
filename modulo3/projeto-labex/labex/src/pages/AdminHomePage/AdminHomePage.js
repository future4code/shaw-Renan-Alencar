import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goToDetailsPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData, useProtectedPage } from "../../hooks/useRequestData";
import { Trips } from "./styled";

const AdminHomePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <Trips key={trip.id}>
          <div>
            <p onClick={() => goToDetailsPage(navigate, trip.id)}>Nome {trip.name}</p>
            <button>excluir</button>
          </div>
        </Trips>
      );
    });

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login')
    }

  return (
    <div>
      <h2>AdminHomePage</h2>

      <button onClick={() => goToCreatTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => navigate('/')}>Voltar</button>
      <button onClick={logout}>Logout</button>
      {trips}
    </div>
  );
};

export default AdminHomePage;
