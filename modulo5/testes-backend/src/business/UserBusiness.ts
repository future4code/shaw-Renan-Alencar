import { UserData } from "../data/UserData";
import { CustomError } from "../errors/CustomError";

export class UserBusiness {
  constructor(
    private userData: UserData
  ){}

  public getUserById = async (id:string):Promise<any> => {
    if (!id) {
      throw new CustomError(422, "Campo inválido");
    }

    const userData = await this.userData.getUserById(id)
    if(!userData){
      throw new CustomError(404, "Usuário não localizado");
    }

    const result = {
      id: userData.getId(),
      name: userData.getName(),
      email: userData.getEmail(),
      role: userData.getRole()
    }

    return result
  }
}