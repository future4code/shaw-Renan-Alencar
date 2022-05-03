import * as React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestData } from "../../hooks/useRequestData";
import { goToApplicationForm, goBack, goHome, goToLoignPage } from "../../routes/coordinator";
import { Lista, Return, CardName } from "./styled";
import Card from "@mui/material/Card";
import { Header } from '../../components/Header/Header';

const ListTripsPage = () => {
  const navigate = useNavigate();
  const listTrip = useRequestData(`${BASE_URL}/trips`, {});

  const trips =
    listTrip.trips &&
    listTrip.trips.map((trip) => {
      return (
        
        <div key={trip.id}>
          <Card className="DivCard" color='primary' sx={{ minWidth: 275 }}>
            <CardName>{trip.planet}</CardName>
            <p>Nome: {trip.name}</p>
            <p>Descrição: {trip.description}</p>
            <p>Duração: {trip.durationInDays} dias</p>
            <p>Data: {trip.date}</p>
            <button className="button" onClick={() => goToApplicationForm(navigate, trip.id)} size="small">
              Inscrever-se
            </button>
          </Card>
        </div>
      );
    });

  return (
    <div>
      <Header 
      first={{function: goHome, text: "Inicio",}}
      second={{function: goToLoignPage, text: "Login",}}
      />
        <Lista>{trips}</Lista>
      <Return onClick={() => goBack(navigate)}>Voltar</Return>
      
    </div>
  );
};

export default ListTripsPage;
