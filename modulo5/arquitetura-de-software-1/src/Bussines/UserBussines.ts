// import { compare } from "bcryptjs";
import { deleteUser } from "../data/deleteUser";
import { insertUser } from "../data/insertUser";
import { selectAllUsers } from "../data/selectAllUsers";
import { selectUserByEmail } from "../data/selectUserByEmail";
import { generateToken, getTokenData } from "../services/authenticator";
import { hash, compare } from "../services/hashManager";
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
      throw new Error("Login ou senha errados");
    }

    const userData = await selectUserByEmail(email);
    
    const passwordIsCorrect:boolean = await compare(password, userData.password);
    if (!passwordIsCorrect) {
      throw new Error("Email ou senha incorreta");
    }

    const token: string = generateToken({
      id: userData.id,
      role: userData.role
    });

    return token
  }

  async getAllUsers(token: string){
    if(!token){
      throw new Error("Token inexistente")
    }
    
    const authenticator = getTokenData(token)

    if(!authenticator){
      throw new Error("Token inválido")
    }

    const allUsers = selectAllUsers()

    return allUsers
  }

  async deleteUser(token: string, id: string){
    if(!token || !id){
      throw new Error("Token ou ID inexistente")
    }

    const authorization = getTokenData(token)

    if(!authorization){
      throw new Error("Token inválido")
    }

    if(authorization.role !== "ADMIN"){
      throw new Error("Apenas administradores podem deletar usuários!")
    }

    const deleteUserBD = deleteUser(id)

    return deleteUserBD
  }
}
