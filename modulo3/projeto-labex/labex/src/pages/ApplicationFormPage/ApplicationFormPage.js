import React from "react";
import { useNavigate } from "react-router-dom";
import { goBack } from '../../routes/coordinator'

const ApplicationFormPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      ApplicationFormPage
      <button onClick={() => goBack(navigate)}>Voltar</button>
    </div>
  );
};

export default ApplicationFormPage;
