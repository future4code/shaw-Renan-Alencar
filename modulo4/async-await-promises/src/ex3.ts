import axios from "axios"
import { baseURL } from "./baseURL"


// A. Não

type user = {
	id: string;
	name: string;
	email: string;
}

const getAllUser = async(): Promise<user[]> => {
  const response = await axios.get(`${baseURL}/subscribers`);
  return response.data.map((res: any) => {
    return {
      id: res.id,
      name: res.name,
      email: res.email,
    };
  });
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