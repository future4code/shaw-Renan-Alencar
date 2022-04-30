import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestDetails,  useProtectedPage,} from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import { goToAdminHome, goBack, goHome, logout } from "../../routes/coordinator";
import { Header } from "../Header/Header";

const TripDetailsPage = () => {
  const [ update, setUpdate] = React.useState(false)
  const navigate = useNavigate();
  useProtectedPage();
  const token = localStorage.getItem("token");
  const HEADERS = {
    headers: {
      auth: token,
    }};

  const {id} = useParams();
  const  detailsTrip = useRequestDetails(
    `${BASE_URL}/trip/${id}`,
    HEADERS
  );
  const [atualizar, setAtualizar] = React.useState(detailsTrip)

  // const teste = () => {
  //   setUpdate(!update)
  //   console.log(update)
  // }

  useEffect(() => {
    
  }, [])

  const DecideCandidate = (decisao, candidateID) => {
    const BODY = {
      approve: decisao,
    };
      axios.put(
        `${BASE_URL}/trips/${id}/candidates/${candidateID}/decide`, BODY, HEADERS)
        .then((res) => {
          alert("Decisão registrada com sucesso!")
          console.log("aprovado");
          detailsTrip();
        })
        .catch((err) => {
          alert("Houve um erro, tenta novamente")
        })
  };

  return (
    <div>
      <Header 
      first={{function: goHome, text: "Início",}}
      second={{function: logout, text: "Sair",}}
      />
      TripDetailsPage
      <button onClick={() => goToAdminHome(navigate)}>Voltar</button>
      {/* <button onClick={teste}>teste</button> */}
      <div>
        {detailsTrip &&  (
          <div>
            <p>{detailsTrip.trip.name}</p>
            <p>{detailsTrip.trip.planet}</p>
            <p>{detailsTrip.trip.description}</p>
            <p>{detailsTrip.trip.date}</p>
            <p>{detailsTrip.trip.durationInDays}</p>

            <h2>Candidatos</h2>
            {detailsTrip && detailsTrip.trip.candidates.length > 0 ? detailsTrip.trip.candidates.map((candidato) => {
              return (
                <li key={candidato.id}>
                  {candidato.name}
                  <button onClick={() => DecideCandidate(true, candidato.id)}>
                    Aprovar
                  </button>

                  <button onClick={() => DecideCandidate(false, candidato.id)}>
                    Reprovar
                  </button>
                </li>
              );
            }) : <p>Não há candidatos aprovados</p>}
          </div>
        )}

        <h2>Aprovados</h2>        
      </div>
      {detailsTrip && detailsTrip.trip.approved.length > 0 ? detailsTrip.trip.approved.map((candidato) => {
        return <li key={candidato.id}>{candidato.name}</li>
      }) : <p>Não há candidatos aprovados</p>}
    </div>
  );
};

export default TripDetailsPage;
