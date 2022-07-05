import { Request, Response } from "express";
import moment from "moment";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { GenerateHash } from "../services/HashManager";

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || email.indexOf("@") === -1 || !password) {
      throw new Error("E-mail ou senha invalido");
    }

    const userDB = new UserDatabase();
    const user = await userDB.getByEmail(email);

    if (!user) {
      res.statusCode = 401;
      throw new Error("Email não cadastrado");
    }

    const generateHash = new GenerateHash();
    const passwordIsCorrect: boolean = 
    await generateHash.compare(password,user.password);

    if (!passwordIsCorrect) {
      res.statusCode = 401;
      throw new Error("Email ou senha incorreta");
    }

    const authenticator = new Authenticator();

    const token = authenticator.generateToken({ id: user.id });

    res.status(201).send({ access_token: token });
  } catch (error: any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}