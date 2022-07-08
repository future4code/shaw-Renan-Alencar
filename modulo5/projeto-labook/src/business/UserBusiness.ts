import UserData from "../data/UserData";
import User from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SignupInputDTO } from "../types/singupInputDTO";

export default class UserBusiness {
  constructor(
    private userData: UserData,
  ){}

  signUp = async (newUser: SignupInputDTO) => {
    const { name, email, password } = newUser;
    if (!email || !name || !password) {
      throw new Error("Campos inválidos");
    }

    const id = IdGenerator.generateId()
    

    const hashedPassword = await HashManager.hash(password)

    const user = new User(id, name, email, hashedPassword);
    
    await this.userData.insert(user)

    const token = Authenticator.generateToken({ id })
    
    return token
  };
}