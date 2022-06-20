import { Request, Response } from "express"
import { connection } from "../data/connection";
import { getFullAddress } from "../data/getFullAddress";
import { AddressFull } from "../types/typeAddress";

export const insertAddress = async (req: Request, res: Response) => {
  try {
    const cep = req.params.cep;
    const { numero } = req.body;
    const result = await getFullAddress(cep);

    if (!result) {
      throw new Error("CEP inválido, favor verificar");
    }

    const addressFull: AddressFull = {
      cep: result.cep,
      logradouro: result.logradouro,
      bairro: result.bairro,
      numero: numero,
      cidade: result.localidade,
      estado: result.uf,
    };

    await connection("CadastroEndereco").insert(addressFull);

    res.status(201).send("Endereço cadastrado com sucesso!");
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};