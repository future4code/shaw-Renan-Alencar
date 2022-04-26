import React from "react";
import { useNavigate } from "react-router-dom";

const AdminHomePage = () => {
  const navigate = useNavigate();

  const goToCreatTrip = () => {
    navigate("/admin/trips/create");
  };

  const toBack = () => {
    navigate(-1);
  };
  return (
    <div>
      AdminHomePage
      <button onClick={goToCreatTrip}>Criar Viagem</button>
      <button onClick={toBack}>Voltar</button>
      <button>Logout</button>
    </div>
  );
};

export default AdminHomePage;
