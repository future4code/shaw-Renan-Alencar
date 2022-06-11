import { Request, Response } from "express";
import connection from "../data/connection";

export default async function getUserQuery(req: Request,res: Response){
  try {
    const query = req.query.query;

    if (!query) {
      res.status(404);
      throw new Error("Nickname ou e-mail não informado!");
    }

    const result = await connection("TodoListUser")
      .select("id", "nickname")
      .where({ "TodoListUser.nickname": query })
      .orWhere({ "TodoListUser.email": query });

    res.status(200).send({ users: result });
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}