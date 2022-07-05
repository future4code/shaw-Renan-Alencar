import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerate } from "../services/IdGenerate";

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string;

    const date = moment().format("YYYY-MM-DD")

    const {title, description} = req.body


    if (!title || !description) {
      res.statusCode = 422;
      throw new Error("Dandos faltando, favor verificar.");
    }

    const authenticator = new Authenticator();
    const data = authenticator.getTokenData(token);

    const generate = new IdGenerate();
    const id: string = generate.generateId();

    const recipeDB = new RecipeDatabase();
    const newRecipe: Recipe = {
      id,
      title,
      description,
      cratedAt: date
    };
    await recipeDB.createRecipe(newRecipe)

    res.status(201).send("Receita criada com sucesso")
   
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}