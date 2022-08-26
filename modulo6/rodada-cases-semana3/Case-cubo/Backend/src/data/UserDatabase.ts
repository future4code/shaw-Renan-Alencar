import { BaseError } from "../error/BaseError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "Case_Cubo";

  public createUser = async (
    id: string,
    first_name: string,
    last_name: string,
    participation: number
  ): Promise<User | undefined> => {
    try {
      await this.getConnection()
        .insert({
          id,
          first_name,
          last_name,
          participation,
        })
        .into(UserDatabase.TABLE_NAME);

      return;
    } catch (error: any) {
      throw new BaseError(422, error.sqlMessage || error.message);
    }
  };

  public allUsers = async () => {
    try {
      const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME);

      return result
    } catch (error: any) {
      throw new BaseError(422, error.sqlMessage || error.message);
    }
  };

  public deleteUser =async (id:string) => {
    try {
      const result = await this.getConnection()
      .delete()
      .where({id})
      .from(UserDatabase.TABLE_NAME);

      return result
    } catch (error: any) {
      throw new BaseError(422, error.sqlMessage || error.message);
    }
  }
}
