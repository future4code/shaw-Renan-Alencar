import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const useRequestData = (url, initialState) => {
  const [ data, setData] = React.useState(initialState);

  useEffect(() => {
    axios.get(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.response))
  }, [url]);

  return data;
}

export const useRequestDetails = (url, header, initialState) => {
  const [ data, setData] = React.useState(initialState);

  useEffect(() => {
    axios.get(url, header)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.response))
  }, [url]);

  return data;
}

export const useProtectedPage = () =>{
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if(token === null) {
      alert("Para acessar essa página é necessario fazer login")
      navigate("/login")
    }
  })

}
