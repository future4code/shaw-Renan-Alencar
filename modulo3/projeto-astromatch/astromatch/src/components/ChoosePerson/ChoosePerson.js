import React from 'react'
import axios from 'axios';
import { Base_url } from "../../constants/Url"

const ChoosePerson = (props) => {

  const onChange = () => {
    props.atualizando();
  }

  const deuMatch = async () => {
    let body = {
      id: props.id,
      choice: true,
    };
    axios
      .post(`${Base_url}/choose-person`, body)
      .then((res) => {
        props.atualizando();
      })
      .catch((err) => {
        alert(err.response); 
      })
  };

  return (
    <div>
      <button onClick={onChange}>Descartar</button>
      <button onClick={deuMatch}>Curtir</button>

    </div>
  )
}

export default ChoosePerson;