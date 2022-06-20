import { Request, Response } from "express";
import connection from "../data/connection";
import selectUser from "../data/selectUser";

export default async function getUser(req:Request, res:Response){
  try {
    const id = req.params.id;

    const user = await selectUser(id) 

    if(!user){
      res.status(422)
      throw new Error("Usuário não localizado!");
    }

    const result = {id: `${user.id}`, nickname: `${user.nickname}`}

    res.status(200).send(result)
  } catch (error:any) {
    res.status(400).send({message: error.message || error.sqlMessage })    
  }
}