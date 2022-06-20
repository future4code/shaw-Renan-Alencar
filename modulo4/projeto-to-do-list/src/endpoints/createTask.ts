import { Request, Response } from "express";
import connection from "../data/connection";

export default async function createTask(req: Request, res: Response) {
  try {
    const id = new Date().getTime();
    const {title, description, limitDate, creatorUserId} = req.body;

    //desestrutura a data recebida em formado brasileiro para depois converter em formado ingles para o banco
    const [diaNasc, mesNasc, anoNasc] = limitDate.split("/");

    if(!title || !description || !limitDate || !creatorUserId){
      res.status(404)
      throw new Error("Algum campo faltando, favor verificar");
    }

    await connection("TodoListTask")
    .insert({
      id,
      title,
      description,
      limit_date: `${anoNasc}-${mesNasc}-${diaNasc}`,
      creator_user_id: creatorUserId
    })
    
    res.status(200).send("Tarefa criada com sucesso!")
  } catch (error:any) {
    res.status(400).send({message: error.message || error.sqlMessage })  
  }
}




//litmit_date: dsjdos.toString("yyy/mm/dd")