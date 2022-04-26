import React from 'react'
import axios from 'axios';
import { Base_url } from "../../constants/Url"
import { Button } from './styled';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

const ChoosePerson = (props) => {

  const onChange = () => {
    props.atualizando();
  }

  const deuMatch = async () => {
    let body = {
      id: props.id,
      choice: true,
    };
    await axios
      .post(`${Base_url}/choose-person`, body)
      .then((res) => {
        props.atualizando();
      })
      .catch((err) => {
        alert(err.response); 
      })
  };

  return (
    <Button>
      <button className='deslike' onClick={onChange}>
        <ThumbDownAltOutlinedIcon color="error" fontSize='large'/>
      </button>
      <button className='like' onClick={deuMatch}>
        <ThumbUpOutlinedIcon color="success" fontSize='large'/>
      </button>
    </Button>
  );
}

export default ChoosePerson;