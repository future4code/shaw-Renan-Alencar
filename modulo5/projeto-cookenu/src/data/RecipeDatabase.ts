import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase{
  public createRecipe =async (newRecipe: Recipe) => {
    await this.getConnection()("recipe")
    .insert(newRecipe)
  }
}