import FriendData from "../data/FriendData";
import { Authenticator } from "../services/Authenticator";
import { FriendInputDTO } from "../types/friendInputDTO";

export default class FriendBusiness {
constructor(
  private friendData: FriendData
){}

  public follow = async (token: string, followId: FriendInputDTO) => {

    if (!followId) {
      throw new Error("Favor informar ID do usuário");
    }

    const authenticator = Authenticator.getTokenData(token);
    if (!authenticator) {
      throw new Error("Token inválido");
    }
   
    await this.friendData.followFriend(authenticator.id, followId.id)

    return "Você começou a seguir esse usuário!"
  };

  public deleteFallow =async (token: string, unfollowId: FriendInputDTO) => {
    const {id} = unfollowId;
    
    if (!id) {
      throw new Error("Favor informar ID do usuário");
    }

    const authenticator = Authenticator.getTokenData(token);
    if (!authenticator) {
      throw new Error("Token inválido");
    }
   
    const result = await this.friendData.unfollowFriend(authenticator.id, id)

    if (!result) {
      throw new Error("Você não segue esse usuário");
    }

    return "Você deixou de seguir esse usuário!"
  }
}