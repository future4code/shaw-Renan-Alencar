import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { User, UserRole } from "../class";
import { GenerateHash } from "../services/GenerateHash";

export default async function createUser(req: Request, res: Response): Promise<void> {
   try {
     const { email, password, role } = req.body;

     if (!email || email.indexOf("@") === -1) {
       res.statusCode = 422;
       throw new Error("Preencha o campo 'email'");
     }

     if (!password || password.length < 6) {
       res.statusCode = 422;
       throw new Error("Senha deve ter mais que 6 caracteres ");
     }

     const generate = new Generate();
     const id: string = generate.generateId();

     //chamando instancia e criptografando a senha
     const generateHash = new GenerateHash();
     const hash = await generateHash.hash(password);

     const userDB = new UserDatabase();

     const newUser: User = { id, email, password: hash, role};

     await userDB.createUser(newUser);

     const authenticator = new Authenticator();
     const token = authenticator.generateToken({ id, role });

     res.status(201).send({ token: token });

   } catch (error: any) {
     if (res.statusCode === 200) {
       res.status(500).send({ message: "Internal server error" });
     } else {
       res.send({ message: error.message });
     }
   }
} 