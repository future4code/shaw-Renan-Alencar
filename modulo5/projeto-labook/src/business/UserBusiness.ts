import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
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
}