import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if(!email || email.indexOf("@") === -1) {
      throw new Error("Email invalido");
    }

    const userDB = new UserDatabase();
    const user = await userDB.getByEmail(email);

    if (!user) {
      throw new Error("Email ou senha incorreta");
    }

    if (user.password != password) {
      throw new Error("Email ou senha incorreta");
    }

    const authenticator = new Authenticator();

    const token = authenticator.generateToken({ id: user.id });

    res.status(201).send({ token: token });

  } catch (error:any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
};