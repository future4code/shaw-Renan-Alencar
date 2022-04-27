import React from "react";
import { useNavigate } from "react-router-dom";
import { goToApplicationForm, goBack } from "../../routes/coordinator";

const ListTripsPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      ListTripsPage
      <button onClick={() => goToApplicationForm(navigate)}>Inscrever-se</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default ListTripsPage;
