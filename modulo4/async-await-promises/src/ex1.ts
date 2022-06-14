import axios from "axios"
import { baseURL } from "./baseURL"


// A.  GET

// B. Promise<any[]>

//C. função nomeada

async function getAllUser(): Promise<any[]> {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data;
};


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