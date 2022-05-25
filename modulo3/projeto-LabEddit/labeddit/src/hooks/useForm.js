import axios from "axios";
import React, { useEffect, useState } from "react"
import { HEADER } from "../constants/authotization";
import { BASE_URL } from "../constants/urls";

export const useForm = (initialState) => {
  const [form, setForm] = React.useState(initialState)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm({...form,  [name]: value });
  };

  const clean = () => {
    setForm(initialState)
  }

  return { form, onChange, clean };
}


export const GetRequest = (update) => {
  const [listPost,setListPost] = useState([])

  const pegaPosts = () => {
      axios.get(`${BASE_URL}/posts`, HEADER)
      .then((response) => {
        setListPost(response.data)
      }).catch((err) => {
        console.log(err.response)
      });
    };
    useEffect(()=>{
      pegaPosts()
    },[update])
    return{listPost}
  }

  export const GetComentario = (id, update) => {
    const [comments,setComments] = useState('')

  
  const pegaComments = () => {
    if(id !== ''){
      axios.get(`${BASE_URL}/posts/${id}/comments`,HEADER)
       .then((response) => {
         setComments(response.data)
       }).catch((err) => {
        console.log(err.response)
     });
    }
  }
  useEffect(()=>{
    pegaComments()
  },[update])
  return{comments}
} 