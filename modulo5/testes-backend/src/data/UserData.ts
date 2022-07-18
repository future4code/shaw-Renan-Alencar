import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
  protected TABLE_NAME = "User_Arq";

  public getUserById = async (id: string): Promise<any> => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
      .select()
      .where({id})

      return result[0]
    } catch (error: any) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}