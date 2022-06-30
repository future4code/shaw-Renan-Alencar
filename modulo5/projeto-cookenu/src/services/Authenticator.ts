import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../model/User";

export class Authenticator {
  private static Expires_In = "5day";

  public generateToken(input: AuthenticatorData): string {
    const token = jwt.sign(input, 
      process.env.JWT_KEY as string, {
      expiresIn: Authenticator.Expires_In,
    });
    return token;
  }

  public getTokenData = (token: string): AuthenticatorData => {
    const data = jwt.verify(token,  
      process.env.JWT_KEY as string) as AuthenticatorData
    return data
  }
}