import { Request, Response } from "express";
import { User } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerate } from "../services/IdGenerate";
import { GenerateHash } from "../services/HashManager";

export const createUser = async (req: Request,res: Response): Promise<void> => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email) {
      res.statusCode = 422;
      throw new Error("Nome ou e-mail inválido, favor verificar");
    }

    if (!password || password.length < 6) {
      res.statusCode = 400;
      throw new Error("Senha deve ter 6 ou mais caracteres ");
    }

    const generate = new IdGenerate();
    const id: string = generate.generateId();

    const generateHash = new GenerateHash();
    const hash = await generateHash.hash(password);

    const userDB = new UserDatabase();
    const newUser: User = {
      id,
      name,
      email,
      password: hash,
    };
    await userDB.createUser(newUser);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    res.status(201).send({ access_token: token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
};