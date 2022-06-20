import { connection } from "../data/connection"

const selecPathParamsTipo = async (tipo: any): Promise<any> => {
  const result = await connection("aula48_exercicio")
  .where("type","like",`%${tipo}%`);
  return result;
};

export default selecPathParamsTipo;