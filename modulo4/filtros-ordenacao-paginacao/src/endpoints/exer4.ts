import { Request, Response } from "express";
import selectAll from "./selectAll";

export const exercicio4 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let filterNameType = req.query.nameType;
    let orderNameType = req.query.orderNameTtpe;
    let order = req.query.order;
    let page = Number(req.query.page);
    const size = 5;

   
    if (orderNameType !== "name" && orderNameType !== "type") {
      orderNameType = "email";
    }

    if (order !== "asc") {
      order = "desc";
    }

    if (page < 1 || isNaN(page)) {
      page = 1;
    }

    let offset = (page - 1) * size;

    const result = await selectAll(filterNameType, orderNameType, order, offset);

    res.status(200).send(result);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};