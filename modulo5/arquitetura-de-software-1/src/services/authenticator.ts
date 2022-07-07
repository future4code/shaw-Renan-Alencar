import * as jwt from "jsonwebtoken";
// import { USER_ROLES } from "../data/insertUser"
import dotenv from 'dotenv'
import { authenticationData } from "../types/user";

dotenv.config()

export function generateToken(input: authenticationData): string {
  return jwt.sign(input, 
   process.env.JWT_KEY as string, {
    expiresIn: "1day",
  });
}

export function getTokenData(token: string): authenticationData {
  return jwt.verify(token, process.env.JWT_KEY as string) as authenticationData;
}
