import { User } from "../class";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (newUser: User) => {
    await this.getConnection()("User_Cookenu")
    .insert(newUser);
  };
}