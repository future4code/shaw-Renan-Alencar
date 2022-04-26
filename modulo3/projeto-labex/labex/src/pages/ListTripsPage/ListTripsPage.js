import React from 'react'
import { useNavigate } from 'react-router-dom'

const ListTripsPage = () => {
  const navigate = useNavigate();

  const goToApplicationForm = () => {
    navigate('/trips/application')
  }
  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>ListTripsPage
      <button onClick={goToApplicationForm}>Inscrever-se</button>
      <button onClick={goBack}>Voltar</button>
    </div>

  )
}

export default ListTripsPage