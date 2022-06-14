import { connection } from "../data/connection"

const selecPage = async (offset: any): Promise<any> => {
  const result = await connection("aula48_exercicio")
  .limit(5)
  .offset(offset);
  return result;
};

export default selecPage;