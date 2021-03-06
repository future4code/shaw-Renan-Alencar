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

  async getAllUsers(req: Request, res: Response){
    try {
      const token = req.headers.authorization!;

      const userBussines = new UserBussines()
      const users = await userBussines.getAllUsers(token)

      res.status(201).send(users)

    } catch (error:any) {
      res.status(500).send({ message: error.message })
      
    }
  }

  async deleteUser(req: Request, res: Response){
    try {
      const token = req.headers.authorization!;

      const userBussines = new UserBussines()

      await userBussines.deleteUser(token, req.params.id)
      
      res.status(200).send({ message: "Usuário apagado com sucesso!" })
    } catch (error:any) {
      res.status(500).send({ message: error.message })
      
    }
  }
}
