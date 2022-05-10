import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToListTrip, goToLoignPage } from '../../routes/coordinator'
import { Header } from '../../components/Header/Header';
import { Main } from './styled';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header 
      first={{function: goToListTrip, text: "Destinos",}}
      second={{function: goToLoignPage, text: "Entrar",}}
      />
      <Main>
      <h2>Seja bem-vindo a melhor agência de viagem espacial do mundo! </h2>
      <p>Venha conhecer os melhores destinos para visitar</p>
      <div>
      <button onClick={() => goToListTrip(navigate)}>Viagens</button>
      </div>

      </Main>
    </div>
  )
}

export default HomePage