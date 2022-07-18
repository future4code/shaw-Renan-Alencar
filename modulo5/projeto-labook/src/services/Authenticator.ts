import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/authenticationData";


export class Authenticator {
  static generateToken = (payload: authenticationData): string => {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "1day",
    });
  };

  static getTokenData = (token: string): authenticationData => {
    return jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as authenticationData;
  };
}
