import React from "react";
import { useNavigate } from "react-router-dom";

const CreateTripPage = () => {
  const navigate = useNavigate();

  const toBack = () => {
    navigate(-1);
  };
  return (
    <div>
      CreateTripPage
      <button onClick={toBack}>Voltar</button>
      <button>Criar</button>
    </div>
  );
};

export default CreateTripPage;
