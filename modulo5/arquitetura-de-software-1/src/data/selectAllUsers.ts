import { connection } from "../connection";

export const selectAllUsers = async (): Promise<any[]> => {
  try {
    const result = await connection("User_Arq")
    .select("*")
    return result;
  }
  catch (error: any) {
    throw new Error(error.sqlMessage || error.message);
  }
};