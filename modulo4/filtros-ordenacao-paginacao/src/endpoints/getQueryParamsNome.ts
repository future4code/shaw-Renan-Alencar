import { Request, Response } from "express";
import selecQueryParamsNome from "./selectQueryParamsNome";


export const getQueryParamsNome = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name = req.query.name;
    const result = await selecQueryParamsNome(name);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};