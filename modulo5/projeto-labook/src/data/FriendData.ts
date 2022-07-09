import { BaseDataBase } from "./BaseDataBase";

export default class FriendData extends BaseDataBase {
  protected TABLE_NAME = "labook_friends";

  public followFriend = async (id_follow: string, id_followed: string) => {
    try {
      await BaseDataBase.connection(this.TABLE_NAME).insert({
        id_follow: id_followed,
        id_followed: id_follow,
      });

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}