import { connection } from "../data/connection"

const selectAllUsers = async ():Promise<any> => {
  const result = await connection("aula48_exercicio")
     .select("id", "name", "email", "type")  
  return result
}

export default selectAllUsers;
