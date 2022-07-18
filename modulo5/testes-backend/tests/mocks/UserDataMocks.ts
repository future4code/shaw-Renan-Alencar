import { User } from "../../src/types/User";
import { userMocks, userMocks2 } from "./userMocks";

export class UserDataMocks {
  
  public async getUserById(id: string): Promise<User | undefined> {
    
     switch (id) {
      case "id_mock1":
        return  userMocks
      case "id_mock2":
        return userMocks2
      default:
        undefined
    }
    
  }
}
