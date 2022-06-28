import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";


export const  getProfile = async (req: Request,res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string

   

    //Criando instancia de Authenticator
    const authenticator = new Authenticator()
    //chamando função de pedir id atraves do token
     const data = authenticator.getData(token)

     console.log(data)

     if (data.role !== "normal") {
      throw new Error("Você não tem autorizacão, apenas usuarios do grupo 'normal' tem.");
    }

     const userDB = new UserDatabase()
     const user = await userDB.getById(data.id)

     res.status(201).send({
       user: {
         id: user.id,
         email: user.email,
         role: data.role,
       },
     });

  } catch (error:any) {
    res.status(500).send(error.sqlMessage || error.message)
  }
}; 