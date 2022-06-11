import { Request, Response } from "express";
import connection from "../data/connection";
import selectTask from "../data/selectTask";


export default async function getTask(req: Request, res: Response) {
  try {
    const id = req.params.id;
    
    const result = await connection("TodoListTask")
      // faz join na lista TodoListUser, usando a chave estrangeira (creator_user_id) que referencia TodoListUser.id
      .join("TodoListUser", "creator_user_id", "TodoListUser.id")
      .select("TodoListTask.id", "TodoListTask.title","TodoListTask.description", 
      "TodoListTask.limit_date", "TodoListTask.status", "TodoListTask.creator_user_id", "TodoListUser.name")
      .where({ "TodoListTask.id": id });
      
      
      res.status(200).send(result);
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}