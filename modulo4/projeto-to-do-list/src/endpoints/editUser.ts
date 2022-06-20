import { Request, Response } from "express";
import connection from "../data/connection";

export default async function editUser(req:Request, res:Response){
  try { 
    const id = req.params.id;

    const {name, nickname } = req.body;

    if(!name || !nickname){
      res.status(404)
      throw new Error("Algum campo faltando, favor verificar");
    }

    await connection("TodoListUser")
    .update({
      name,
      nickname,
    }).where({id})


    res.status(200).send("Usuário atualizado com sucesso!")
  } catch (error:any) {
    res.status(400).send({message: error.message || error.sqlMessage })  
  }
}