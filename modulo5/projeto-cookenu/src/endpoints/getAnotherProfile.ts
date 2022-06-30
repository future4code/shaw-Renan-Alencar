import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getAnotherProfile = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const data = authenticator.getTokenData(token);

    if(!data){
      res.statusCode = 422;
      throw new Error("Sem autorização.");
    }

    const userDB = new UserDatabase();
    const user = await userDB.getById(req.params.id);

    res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}