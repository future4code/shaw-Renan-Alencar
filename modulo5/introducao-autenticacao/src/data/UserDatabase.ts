import { User } from "../types";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
  public createUser = async (newUser: User) => {
    await this.getConnection()("User").insert(newUser);
  };

  public getByEmail = async (email: string): Promise<any> => {
    const [result] = await this.getConnection()("User")
      .select("*")
      .where({ email });
    return result;
  };

  public getById = async (id: string): Promise<any> => {
    const [result] = await this.getConnection()("User")
      .where({ id });
    return result;
  };
}
