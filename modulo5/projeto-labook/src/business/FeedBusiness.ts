import FeedData from "../data/FeedData";
import { Authenticator } from "../services/Authenticator";

export default class FeedBusiness {
  constructor(private feedData: FeedData) {}

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

    const result = await this.feedData.postFollow(authenticator.id);
    if (result.length === 0) {
      throw new Error("Você ainda não tem amigos, comece uma amizade para ver o posts");
    }

    return result;
  };
}
