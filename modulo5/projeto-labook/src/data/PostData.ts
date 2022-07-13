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

  public postFollow = async (id_follow: string) => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
      .select("labook_users.name", "labook_users.email", "labook_posts.photo", "labook_posts.description", "labook_posts.created_at")
      .join("labook_users","labook_users.id", "labook_friends.id_followed")
      .join("labook_posts","labook_posts.author_id", "labook_friends.id_followed")
      .where({id_follow})
      .orderBy('created_at', 'desc')
      .into("labook_friends")
      return result

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };

  public postType =async (type:string) => {
    try {
      const result = await BaseDataBase.connection(this.TABLE_NAME)
      .select()
      .where({type})
      .orderBy('created_at', 'desc')

      return result

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  }
}