import { Request, Response } from "express";
import FriendBusiness from "../business/FriendBusiness";
import { FriendInputDTO } from "../types/friendInputDTO";

export default class FriendController {
  constructor(
    private friendBusiness: FriendBusiness
  ){}

  followFriend = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const id = req.body;

      const followId: FriendInputDTO =  id ;

      const result = await this.friendBusiness.follow(token, followId)

      res.status(201).send(result);

    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    }
  };
}
