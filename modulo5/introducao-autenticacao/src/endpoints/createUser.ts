import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { User } from "../types";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {
     const { email, password } = req.body;

     if (!email || email.indexOf("@") === -1) {
       res.statusCode = 422;
       throw new Error("Preencha o campo 'email'");
     }

     if (!password || password.length < 6) {
       res.statusCode = 422;
       throw new Error("Senha deve ter mais que 6 caracteres ");
     }

     //Criando instancia de Authenticator
     //chamando função de  gerar id
     const generate = new Generate();
     const id: string = generate.generateId();

     const userDB = new UserDatabase();

     const newUser: User = { id, email, password };

     await userDB.createUser(newUser);

     //Criando instancia de Authenticator
     const authenticator = new Authenticator();

     //chamando função de  gerar Token
     const token = authenticator.generateToken({ id });

     res.status(201).send(token);
   } catch (error: any) {
     if (res.statusCode === 200) {
       res.status(500).send({ message: "Internal server error" });
     } else {
       res.send({ message: error.message });
     }
   }
}