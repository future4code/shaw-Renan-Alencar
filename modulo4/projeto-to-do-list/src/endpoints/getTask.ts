import { Request, Response } from "express";


export default async function getTask(req: Request, res: Response) {
  try {

    const id = req.params.id
    
  } catch (error:any) {
    res.status(400).send({message: error.message || error.sqlMessage }) 
  }
}