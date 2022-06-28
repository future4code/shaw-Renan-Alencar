import { User } from "../types";
import { BaseDatabase } from "./BaseDatabase";
import { AuthenticatorData } from "../types";


export class UserDatabase extends BaseDatabase {
  public createUser = async (newUser: User) => {
    await this.getConnection()("User").insert(newUser);
  };


  public getByEmail = async (email: string): Promise<any> => {
    const [result] = await this.getConnection()("User")
    .select("*")
    .where({ email });
    return result
  };

  
}

// export class UserDatabase extends BaseDatabase {
//     public create = async (newUser: user) => {
//         await this.getConnection()
//             ('to_do_list_users')
//             .insert(newUser)

//     }
//     public edit = async (id: string, columnsUpdate: { name: string, nickname: string }) => {
//         await this.getConnection()('to_do_list_users')
//             .update(columnsUpdate)
//             .where({ id })
//     }
//     public getByEmail = async (email: string) => {
//         const [result] = await this.getConnection()('to_do_list_users')
//             .where({ email })
//         return result
//     }
// }