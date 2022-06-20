import { Request, Response } from "express";
import selectUser from "../data/selectUser";
import  connection  from "../data/connection";


export default async function getAllUsers(req: Request, res: Response) {
  try {
    const users = await connection("TodoListUser");

    res.status(200).send(users || []);
  } catch (error: any) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}