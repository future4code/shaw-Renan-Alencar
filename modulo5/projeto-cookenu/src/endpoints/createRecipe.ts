import { Request, Response } from "express";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Recipe } from "../model/Recipe";
import { Authenticator } from "../services/Authenticator";
import { IdGenerate } from "../services/IdGenerate";

export const createRecipe = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string;

    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const date_post = `${year}-${month}-${day}`;

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
      cratedAt: date_post
    };
    await recipeDB.createRecipe(newRecipe)

    res.status(201).send(newRecipe)
   
  } catch (error:any) {
    // if (res.statusCode === 200) {
    //   res.status(500).send({ message: "Internal server error" });
    // } else {
      res.send({ message: error.message });
    // }
  }
}