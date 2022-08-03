import { UserDatabase } from "../data/UserDatabase";
import { BaseError } from "../error/BaseError";
import { IdGenerator } from "../services/IdGenerator";
import { CreatePostInputDTO } from "../types/createPostInputDTO";
import { deletePostInputDTO } from "../types/deletePostInputDTO";

export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private userData: UserDatabase
  ) {}
  createUser = async (input: CreatePostInputDTO) => {
    const { first_name, last_name, participation } = input;

    if (!first_name || !last_name || !participation) {
      throw new BaseError(422, "Invalid fields");
    }

    const id = this.idGenerator.generate();

    const result = await this.userData.createUser(
      id,
      first_name,
      last_name,
      participation
    );

    return result;
  };

  getusers = async () => {
    const result = await this.userData.allUsers();

    return result;
  };

  deleteUser=async (input: deletePostInputDTO) => {
    const {id} = input;

    if (!id) {
      throw new BaseError(422, "Invalid field");
    }

    const result = await this.userData.deleteUser(id)

    return result;
  }
}
