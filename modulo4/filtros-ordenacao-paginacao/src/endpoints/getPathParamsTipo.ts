import { Request, Response } from "express";
import selecPathParamsTipo from "./selectPathParamsTipo";

export const getPathParamsTipo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const tipo = req.params.tipo;
    const result = await selecPathParamsTipo(tipo);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};