import { BaseError } from "../error/BaeError";
import { IdGenerator } from "../services/IdGenerator";
import { CreatePostInputDTO } from "../types/createPostInputDTO";

export class UserBusiness {

  constructor (
    private idGenerator: IdGenerator,
    private userData: UserDatabase,

  ) {}
  createUser = async (input: CreatePostInputDTO) => {
    const { first_name, last_name, participation} = input

    if(!first_name || !last_name || !participation) {
      throw new BaseError(422, "Invalid fields")
    }

    const id = this.idGenerator.generate()

    await this.userData.createUser(id, first_name, last_name, participation)

    return("Usuário criado")

  }
}