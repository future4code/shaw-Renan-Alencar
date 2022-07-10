import { Request, Response } from "express";
import FeedBusiness from "../business/FeedBusiness";

export default class FeedController{
  constructor(private feedBusiness: FeedBusiness) {}


  postUserFollow = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      
      const result = await this.feedBusiness.allPostFollow(token)
      res.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    }
  }
}