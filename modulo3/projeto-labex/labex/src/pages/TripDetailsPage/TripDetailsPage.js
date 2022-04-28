import React from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/Base_url";
import { useRequestDetails, useProtectedPage } from "../../hooks/useRequestData";

const TripDetailsPage = () => {
  useProtectedPage();
  const token = localStorage.getItem("token");
  const HEADERS = {
    headers: {
      auth: token,
    },
  };
  const params = useParams();
  const detailsTrip = useRequestDetails(
    `${BASE_URL}/trip/${params.id}`,
    HEADERS
  );

  return (
    <div>
      TripDetailsPage
      <div>
        {detailsTrip && (
          <div>
            <p>{detailsTrip.trip.name}</p>
            <p>{detailsTrip.trip.planet}</p>
            <p>{detailsTrip.trip.description}</p>
            <p>{detailsTrip.trip.date}</p>
            <p>{detailsTrip.trip.durationInDays}</p>

            <h2>Candidatos</h2>
            {detailsTrip.trip.candidates.map((candidato) => {
              return <li key={candidato.id}>{candidato.name}</li>;
            })}
          </div>
        )}

        <h3>Aprovados</h3>
      </div>
    </div>
  );
};

export default TripDetailsPage;
