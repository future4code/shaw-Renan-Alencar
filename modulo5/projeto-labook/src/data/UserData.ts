import User from "../model/User";
import { BaseDataBase } from "./BaseDataBase";


export default class UserData extends BaseDataBase {
  protected TABLE_NAME = "labook_users";

  public insert = async (user: User) => {
    try {
      await BaseDataBase.connection(this.TABLE_NAME)
      .insert(user);
      
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  public selectUser = async (email:string) => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
      .select()
      .where({email});

      return result[0]

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  }
}