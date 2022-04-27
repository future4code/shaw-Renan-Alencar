import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCreatTrip, goBack } from "../../routes/coordinator";

const AdminHomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      AdminHomePage
      <button onClick={() =>goToCreatTrip(navigate)}>Criar Viagem</button>
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Logout</button>
    </div>
  );
};

export default AdminHomePage;
