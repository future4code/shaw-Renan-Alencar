import { Request, Response } from "express";
import moment from "moment";
import { RecipeDatabase } from "../data/RecipeDatabase";
import { Authenticator } from "../services/Authenticator";

export const getRecipe =async (req:Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    if(authenticator.getTokenData(token)){
      res.statusCode = 422;
      throw new Error("Sem autorização.");
    }

    const recipeDB = new RecipeDatabase();
    const recipe = await recipeDB.getById(req.params.id);
    
    res.status(201).send({
      id: recipe.id,
      title: recipe.title,
      description: recipe.description,
      cratedAt: moment(recipe.cratedAt).format("DD/MM/YYYY")
    });
  } catch (error:any) {
    if (res.statusCode === 200) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.send({ message: error.message });
    }
  }
}