import { connection } from "../data/connection"

const selecFilter = async (filter: any, order: any): Promise<any> => {
  const result = await connection("aula48_exercicio")
  .orderBy(filter, order)
  return result;
};

export default selecFilter;