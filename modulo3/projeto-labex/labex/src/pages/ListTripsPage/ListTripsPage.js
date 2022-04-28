import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToApplicationForm, goBack } from "../../routes/coordinator";
import { Lista } from "./styled";

import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const ListTripsPage = () => {
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        <div key={trip.id}>
          <Card sx={{ minWidth: 275 }}>
            <p>{trip.planet}</p>
            <p>Nome {trip.name}</p>
            <p>Descrição {trip.description}</p>
            <p>Duração {trip.durationInDays} dias</p>
            <p>Data {trip.date}</p>
            <Button onClick={() => goToApplicationForm(navigate)} size="small">
              Inscrever-se
            </Button>
          </Card>
        </div>
      );
    });

  return (
    <div>
      ListTripsPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <span>
        <Lista>{trips}</Lista>
      </span>
    </div>
  );
};

export default ListTripsPage;
