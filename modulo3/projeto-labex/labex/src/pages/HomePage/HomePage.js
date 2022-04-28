import React from 'react'
import { useNavigate } from 'react-router-dom';
import { goToListTrip, goToLoignPage } from '../../routes/coordinator'

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>HomePage</h2>
      <button onClick={() => goToListTrip(navigate)}>Lista Trip</button>
      <button onClick={() => goToLoignPage(navigate)}>Logar</button>
    </div>
  )
}

export default HomePage