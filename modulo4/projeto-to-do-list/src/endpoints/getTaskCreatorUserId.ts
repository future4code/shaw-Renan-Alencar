import { Request, Response } from "express";
import connection from "../data/connection";

export default async function getTaskCreatorUserId(req: Request,res: Response) {
  try {
    const creatorUserId = req.query.creatorUserId;

    if (!creatorUserId) {
      res.status(404);
      throw new Error("ID do usuário não enviado, favor verificar!");
    }

    const result = await connection("TodoListTask")
      .join("TodoListUser", "creator_user_id", "TodoListUser.id")
      .select(
        "TodoListTask.id as taskId",
        "TodoListTask.title",
        "TodoListTask.description",
        "TodoListTask.limit_date as limitDate",
        "TodoListTask.creator_user_id as creatorUserId",
        "TodoListTask.status",
        "TodoListUser.nickname as creatorUserNickname"
      )
      .where({ "TodoListTask.creator_user_id": creatorUserId });

    res.status(200).send({ tasks: result });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}