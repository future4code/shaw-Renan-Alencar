import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { CreatePostInputDTO } from "../types/createPostInputDTO";
import { deletePostInputDTO } from "../types/deletePostInputDTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const { first_name, last_name, participation } = req.body;

      const input: CreatePostInputDTO = {
        first_name,
        last_name,
        participation,
      };

      await this.userBusiness.createUser(input);

      res.status(200).send({ message: "User registered successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    } finally {
      BaseDatabase.destroyConnection();
    }
  };

  getAllUsers = async (req: Request, res: Response) => {
    try {
      const result = await this.userBusiness.getusers();

      res.status(200).send(result);

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    } finally {
      BaseDatabase.destroyConnection();
    }
  };

  deleteUser =async (req: Request, res: Response) => {
    try {
      const id = req.params.id;

      const input: deletePostInputDTO = {
        id,
      }

      await this.userBusiness.deleteUser(input);

      res.status(200).send({ message: "User deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Erro no signup");
    } finally {
      BaseDatabase.destroyConnection();
    }
  }
}
