import axios from "axios"

export const getFullAddress = async (cep:string): Promise<any | undefined> => {
  try {
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    
    return result.data;
  } catch (error:any) {
   return undefined
  }
}