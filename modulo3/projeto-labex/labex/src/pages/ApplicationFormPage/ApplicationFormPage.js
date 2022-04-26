import React from 'react'
import { useNavigate } from 'react-router-dom'

const ApplicationFormPage = () => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div>ApplicationFormPage
      <button onClick={goBack}>Voltar</button>
    </div>
  )
}

export default ApplicationFormPage