import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types";

export class Authenticator {
  private static Expires_In = "20min";

  public generateToken(input: AuthenticatorData): string {
    const token = jwt.sign(input, 
      process.env.JWT_KEY as string, {
      expiresIn: Authenticator.Expires_In,
    });
    return token;
  }

  public getData = (token: string): AuthenticatorData => {
    const data = jwt.verify(token,  
      process.env.JWT_KEY as string) as AuthenticatorData
    return data
  }
}