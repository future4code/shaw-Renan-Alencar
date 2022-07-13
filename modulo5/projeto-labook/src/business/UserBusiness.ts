import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { FriendInputDTO } from "../types/friendInputDTO";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SignupInputDTO } from "../types/singupInputDTO";

export default class UserBusiness {
  constructor(private userData: UserData) {}

  public signUp = async (newUser: SignupInputDTO) => {
    const { name, email, password } = newUser;
    if (!email || !name || !password) {
      throw new Error("Campos inválidos");
    }

    const userData = await this.userData.selectUser(email);
    if(userData){
      throw new Error("Email já cadastrado");
    }

    const id = IdGenerator.generateId();

    const hashedPassword = await HashManager.hash(password);

    const user = new User(id, name, email, hashedPassword);

    await this.userData.insert(user);

    const token = Authenticator.generateToken({ id });

    return token;
  };

  public login = async (user: LoginInputDTO) => {
    const { email, password } = user;
    if (!email || !password) {
      throw new Error("Campos inválidos");
    }

    const userData = await this.userData.selectUser(email);
    if(!userData){
      throw new Error("Email ou senha incorreta");
    }

    const passwordIsCorrect: boolean = await HashManager.compare(password, userData.password);
    if (!passwordIsCorrect) {
      throw new Error("Email ou senha incorreta");
    }

    const token = Authenticator.generateToken({ id: userData.id });

    return token;
  };

  public follow = async (token: string, followId: FriendInputDTO) => {

    if (!followId) {
      throw new Error("Favor informar ID do usuário");
    }

    const authenticator = Authenticator.getTokenData(token);
    if (!authenticator) {
      throw new Error("Token inválido");
    }
   
    await this.userData.followFriend(authenticator.id, followId.id)
    await this.userData.followFriend(followId.id, authenticator.id)


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
   
    const result = await this.userData.unfollowFriend(authenticator.id, id)
    await this.userData.unfollowFriend(id, authenticator.id)


    if (!result) {
      throw new Error("Você não segue esse usuário");
    }

    return "Você deixou de seguir esse usuário!"
  }
}