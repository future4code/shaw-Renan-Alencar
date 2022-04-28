import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goBack } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData } from "../../hooks/useRequestData";
import { Trips } from "./styled";

const AdminHomePage = () => {
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const details = () => {
    console.log("linkar na pagina detalhes da viagem")
  }

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <Trips key={trip.id}>
          <div>
            <p onClick={details}>Nome {trip.name}</p>
            <button>excluir</button>
          </div>
        </Trips>
      );
    });

  return (
    <div>
      <h2>AdminHomePage</h2>

      <button onClick={() => goToCreatTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Logout</button>
      {trips}
    </div>
  );
};

export default AdminHomePage;
