import PostData from "../data/PostData";
import Post from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { CreatePostInputDTO } from "../types/createPostInputDTO";

export default class PostBusiness{
  constructor(
    private postData: PostData
  ){}

  public createPost = async (newPost:CreatePostInputDTO, token:string) => {
    const {photo, description, created_at, type} = newPost;
    if (!photo || !description || !created_at || !type) {
      throw new Error("Campos inválidos");
    }

    const authenticator = Authenticator.getTokenData(token)
    if(!authenticator){
      throw new Error("Token inválido")
    }
  
    const id = IdGenerator.generateId();

    const post = new Post (
      id,
      photo,
      description,
      created_at,
      authenticator.id,
      type,
    );

    await this.postData.createPost(post);

    return "Post criado com sucesso"
  }
}