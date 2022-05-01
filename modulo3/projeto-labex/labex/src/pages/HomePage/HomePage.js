import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToListTrip, goToLoignPage } from '../../routes/coordinator'
import { Header } from '../Header/Header';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header 
      first={{function: goToListTrip, text: "Viagens",}}
      second={{function: goToLoignPage, text: "Entrar",}}
      />

      <h2>HomePage</h2>
      <button onClick={() => goToListTrip(navigate)}>Lista Trip</button>
      <button onClick={() => goToLoignPage(navigate)}>Logar</button>
    </div>
  )
}

export default HomePage