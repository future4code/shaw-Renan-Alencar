import Post from "../model/Post";
import { BaseDataBase } from "./BaseDataBase"

export default class PostData extends BaseDataBase {
  protected TABLE_NAME = "labook_posts";

  public createPost = async (post: Post) => {
    try {
      await BaseDataBase.connection(this.TABLE_NAME)
      .insert(post);

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  public getPostById =async (id:string) => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
      .select()
      .where({id})

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