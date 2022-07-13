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
      throw new CustomError(422, "Post não localizado");
    }

    const result = {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      role: userData.role
    }

    return result
  }
}