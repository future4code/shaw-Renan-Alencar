import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from '../../routes/coordinator'

const CreateTripPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      CreateTripPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
      <button>Criar</button>
    </div>
  );
};

export default CreateTripPage;
