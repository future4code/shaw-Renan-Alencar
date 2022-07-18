import User from "../model/User";
import { BaseDataBase } from "./BaseDataBase";


export default class UserData extends BaseDataBase {
  protected TABLE_NAME = "labook_users";

  public insert = async (user: User) => {
    try {
      await BaseDataBase.connection(this.TABLE_NAME).insert(user);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  public selectUser = async (email: string) => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
        .select()
        .where({ email });

      return result[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  public followFriend = async (id_follow: string, id_followed: string) => {
    try {
      await BaseDataBase.connection(this.TABLE_NAME)
        .insert({
          id_follow,
          id_followed,
        })
        .into("labook_friends");
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  public unfollowFriend = async (id_follow: string, id_followed: string) => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
        .del()
        .where({ id_followed })
        .andWhere({ id_follow })
        .into("labook_friends");

      return result;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}