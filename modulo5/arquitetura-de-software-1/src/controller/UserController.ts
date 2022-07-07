import { Request, Response } from "express";
import { UserBussines } from "../Bussines/UserBussines";
import { login, userInput } from "../types/user";


export class UserController {
  async signUp(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      const newUser: userInput = {
        name, email, password, role
      }

      // instanciar a classe bussines
      const userBussines = new UserBussines()

      // chamar o metodo de signUp , que esta no UserBussines e ele retorna um token
      const token = await userBussines.signUp(newUser)

      res.status(201).send({ message: "usuario criado com sucesso", token })

    } catch (error:any) {
      res.status(500).send({ message: error.message })

    }
  }

  async login(req: Request, res: Response){
    try {
      const {email, password} = req.body

      const login: login = {
        email, password
      }

      const userBussines = new UserBussines()

      const token = await userBussines.login(login)

      res.status(201).send({token })
    } catch (error:any) {
      res.status(500).send({ message: error.message })
      
    }
  }
}
