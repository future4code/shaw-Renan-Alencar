import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { useProtectedPage} from "../../hooks/useRequestData";
import { logout, goBack } from "../../routes/coordinator";
import { Header } from '../../components/Header/Header';
import { Lista, CanditadosDiv, ButtonCandidato, CardViagem } from "./styled";

const TripDetailsPage = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const HEADERS = {
    headers: {
      auth: token,
    },
  };
  const { id } = useParams();
  const [detailsTrip, setDetailsTrip ] = useState('')
  const [update, setUpdate] = React.useState(false);

  useEffect(() => {

     axios.get(`${BASE_URL}/trip/${id}`, HEADERS)
     .then((res) => {
      setDetailsTrip(res.data);
      setUpdate(!update)
     })
     .catch((err) => {
       alert(err.response)
     })
  }, [update]);

  const DecideCandidate = (decisao, candidateID) => {
    const BODY = {
      approve: decisao,
    };
    axios
      .put(
        `${BASE_URL}/trips/${id}/candidates/${candidateID}/decide`,
        BODY,
        HEADERS
      )
      .then((res) => {
        alert("Decisão registrada com sucesso!");
      })
      .catch((err) => {
        alert("Houve um erro, tenta novamente");
      });
  };

  return (
    <div>
      <Header
        first={{ function: goBack, text: "Voltar" }}
        second={{ function: logout, text: "Sair" }}
      />
      <Lista>
        {detailsTrip && (
          <CardViagem>
            <p>Nome: {detailsTrip.trip.name}</p>
            <p>Planeta: {detailsTrip.trip.planet}</p>
            <p>Descrição: {detailsTrip.trip.description}</p>
            <p> Data: {detailsTrip.trip.date}</p>
            <p> Duração: {detailsTrip.trip.durationInDays}</p>
          </CardViagem>
        )}
        <CanditadosDiv>
          <div>
            <h2>Candidatos Pendentes</h2>
            {detailsTrip && detailsTrip.trip.candidates.length > 0 ? (
              detailsTrip.trip.candidates.map((candidato) => {
                return (
                  <li key={candidato.id}>
                    {candidato.name}
                    <div>
                      <ButtonCandidato onClick={() => DecideCandidate(true, candidato.id)}>
                        Aprovar
                      </ButtonCandidato>
                      
                      <ButtonCandidato onClick={() => DecideCandidate(false, candidato.id)}>
                        Reprovar
                      </ButtonCandidato>
                    </div>
                  </li>
                );
              })
            ) : (
              <p>Não há candidatos pendentes</p>
            )}
          </div>

          <div>
            <h2>Canditados Aprovados</h2>
            {detailsTrip && detailsTrip.trip.approved.length > 0 ? (
              detailsTrip.trip.approved.map((candidato) => {
                return <li key={candidato.id}>{candidato.name}</li>;
              })
            ) : (
              <p>Não há candidatos aprovados</p>
            )}
          </div>
        </CanditadosDiv>
      </Lista>
    </div>
  );
};

export default TripDetailsPage;
