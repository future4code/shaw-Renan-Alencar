import { Request, Response } from "express";
import connection from "../data/connection";

export default async function createUser(req:Request, res:Response) {
  try {
    const id = new Date().getTime();
    const {name, nickname, email } = req.body;

    if(!name || !nickname || !email){
      res.status(404)
      throw new Error("Algum campo faltando, favor verificar");
    }
  
    await connection("TodoListUser")
    .insert({
      id,
      name,
      nickname,
      email
    })
    
    res.status(200).send("Usuário criado com sucesso!")
  } catch (error:any) {
    res.status(400).send({message: error.message || error.sqlMessage })
  }
}