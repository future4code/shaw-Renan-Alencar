import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  constructor( 
    private userBusiness: UserBusiness
  ){}

  getuserbyid = async (req: Request, res: Response) => {
    try {
      const { id } = req.params

      const result = await this.userBusiness.getUserById(id)

      res.status(201).send(result);
      
    } catch (error:any) {
      res.status(error.statusCode || 500).send({
        message: error.message
    })
    }
  }
}