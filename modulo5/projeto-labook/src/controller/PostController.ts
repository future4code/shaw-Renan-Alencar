import { Request, Response } from "express";
import moment from "moment";
import PostBusiness from "../business/PostBusiness";
import { CreatePostInputDTO } from "../types/createPostInputDTO";

export default class PostController {
  constructor(private postBusiness: PostBusiness) {}

  createPost = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const { photo, description, date, role } = req.body;

      const newPost: CreatePostInputDTO = {
        photo,
        description,
        created_at: moment(date, "DD/MM/YYYY").format("YYYY-MM-DD"),
        type: role,
      };

      const result = await this.postBusiness.createPost(newPost, token);

      res.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    }
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const id = req.params.id;

      const result = await this.postBusiness.getPostById(token, id)

      res.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    }
  };
}
