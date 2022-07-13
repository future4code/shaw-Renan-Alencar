import moment from "moment";
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

    if(!token){
      throw new Error("Para acessar essa funcionalidoda é necessario estar logado")
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

  public getPostById =async (token: string, id: string) => {
    if(!token){
      throw new Error("Para acessar essa funcionalidoda é necessario estar logado")
    }

    const authenticator = Authenticator.getTokenData(token)
    if(!authenticator){
      throw new Error("Token inválido")
    }

    const postData = await this.postData.getPostById(id)
    if(!postData){
      throw new Error("Post não localizado");
    }

    const result = {
      id: postData.id,
      photo: postData.photo,
      description: postData.description,
      date: moment(postData.created_at, "YYYY-MM-DD").format("DD/MM/YYYY"),
      author: postData.author_id,
      type: postData.type
    }

    return result;
  }

  public allPostFollow = async (token: string) => {
    if (!token) {
      throw new Error(
        "Para acessar essa funcionalidoda é necessario estar logado"
      );
    }

    const authenticator = Authenticator.getTokenData(token);
    if (!authenticator) {
      throw new Error("Token inválido");
    }
    const result = await this.postData.postFollow(authenticator.id);
    if (result.length === 0) {
      throw new Error("Você ainda não tem amigos, comece uma amizade para ver os posts");
    }
    return result;
  };

  public getPostByType = async (token:string, type:string) => {
    if (!token) {
      throw new Error(
        "Para acessar essa funcionalidoda é necessario estar logado"
      );
    }
    const authenticator = Authenticator.getTokenData(token);
    if (!authenticator) {
      throw new Error("Token inválido");
    }

    const typeData = await this.postData.postType(type);

    const result = typeData.map((data) => {
      return {
        photo: data.photo,
        description: data.description,
        date: moment(data.created_at, "YYYY-MM-DD").format("DD/MM/YYYY"),
        author: data.author_id,
        type: data.type,
      };
    });
    
    return result
  }
}