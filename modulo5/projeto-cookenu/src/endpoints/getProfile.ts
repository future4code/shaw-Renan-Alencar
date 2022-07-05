import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getProfile = async (req: Request, res:Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const data = authenticator.getTokenData(token);

    const userDB = new UserDatabase();
    const user = await userDB.getById(data.id);

    res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
    
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}