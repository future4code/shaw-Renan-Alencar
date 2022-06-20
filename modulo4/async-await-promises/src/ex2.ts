import axios from "axios"
import { baseURL } from "./baseURL"

// arrow function
const getAllUser = async(): Promise<any[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
  // return axios.get(`${baseURL}/subscribers`)
  // .then(res => res.data)
}

const main = async () => {
  try {
    const result = await getAllUser()
    console.log(result)
    
  } catch (error:any) {
    const resp = error.response?.data || error.message
        console.log(resp)
  }
}

main()