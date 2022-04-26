import React from 'react'
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const goToListTrip = () => {
    navigate('/trips/list')
  }

  const goToLoignPage = () => {
    navigate('/login')
  }

  return (
    <div>
      HomePage
      <button onClick={goToListTrip}>Lista Trip</button>
      <button onClick={goToLoignPage}>Logar</button>
    </div>
  )
}

export default HomePage