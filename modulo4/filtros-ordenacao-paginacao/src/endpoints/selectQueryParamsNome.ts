import { connection } from "../data/connection"

const selecQueryParamsNome = async (name: any): Promise<any> => {
  const result = await connection("aula48_exercicio")
  .where("name","like",`%${name}%`);
  return result;
};

export default selecQueryParamsNome;