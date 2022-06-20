import { Request, Response } from "express";
import selecFilter from "./selectFilter";

export const exercicio2 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let order = req.query.order;
    let filter = req.query.filter;

    if (order !== "asc") {
      order = "desc";
    }

    if (filter !== "nome" && filter !== "type") {
      filter = "email";
    }

    const result = await selecFilter(filter, order);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};