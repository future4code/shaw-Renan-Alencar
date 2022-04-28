import React, { useEffect } from 'react'
import axios from 'axios'

export const useRequestData = (url, initialState) => {
  const [ data, setData] = React.useState(initialState);

  useEffect(() => {
    axios.get(url)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.response))
  }, [url]);

  return data;
}
