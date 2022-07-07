import { connection } from "../connection";

export const deleteUser = async (id: string): Promise<any> => {
  try {
    const result = await connection("User_Arq")
    .where({ id })
    .del()
    if (!result) {
      throw new Error("Usuário não encontrado");
    }
    return result;
  } catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};