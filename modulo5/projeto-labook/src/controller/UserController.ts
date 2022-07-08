import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import { SignupInputDTO } from "../types/singupInputDTO";

export default class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) {}

  singUp = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const newUser: SignupInputDTO = {
        name, email, password,
      };

      const token = await this.userBusiness.signUp(newUser);
      res.status(201).send({ 
        message: "Usuário cadastrado com sucesso", 
        token 
      });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    }
  };
}
