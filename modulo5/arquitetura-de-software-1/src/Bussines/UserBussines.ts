import { insertUser } from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { login, userInput } from "../types/user";

export class UserBussines {
  async signUp(user: userInput) {
    const { name, email, password, role } = user;

    if (!name || !email || !password || !role) {
      throw new Error("Favor verificar se todos os campos foram preenchidos corretamente!");
    }

    //gerar ID
    const id: string = generateId();

    //fazer hash(criptografar) da senha
    const cypherPassword = await hash(password);

    //inserir os valores no banco de dados
    const userData = new insertUser();
    await userData.insert({
      id,
      name,
      email,
      password: cypherPassword,
      role,
    });

    // gerar o token
    const token: string = generateToken({
      id,
      role: role,
    });

    return token;
  }

  async login(user: login){
    const {email, password} = user;

    if(!email || !password) {

    }

  }
}
