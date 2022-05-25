import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const useProtectedPage = () =>{
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token === null) {
      alert("Para acessar essa página é necessario fazer login")
      navigate("/")
    }
  })

}