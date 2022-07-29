import axios from "axios";


export const getData = async (input) => {
  const { url, setData } = input;
  await axios
    .get(url)
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      alert(err.response);
    });
};