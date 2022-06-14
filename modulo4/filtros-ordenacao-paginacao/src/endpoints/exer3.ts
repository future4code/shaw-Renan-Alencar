import { Request, Response } from "express";
import selecPage from "./selectPage";

export const exercicio3 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let page = Number(req.query.page);
    const size = 5;

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    let offset = (page - 1) * size;

    const result = await selecPage(offset);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};