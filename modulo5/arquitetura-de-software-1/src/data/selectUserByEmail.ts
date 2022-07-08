import { connection } from "../connection";

export const selectUserByEmail = async (email: string): Promise<any> => {
  try {
    const [result] = await connection("User_Arq")
    .select("*")
    .where({ email });
    if (!result) {
      throw new Error("Usuário não encontrado");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};