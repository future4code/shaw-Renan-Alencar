import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (newUser: User) => {
    await this.getConnection()("User_Cookenu")
    .insert(newUser);
  };

  public getByEmail = async (email: string) => {
    const [result] = await this.getConnection()("User_Cookenu")
      .select("*")
      .where({ email });
    return result;
  };

  public getById = async ( id: string) => {
    const [result] = await this.getConnection()("User_Cookenu")
      .select("*")
      .where( {id} );
    return result;
  };
}