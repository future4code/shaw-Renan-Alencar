import { Recipe } from "../model/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatabase extends BaseDatabase{
  public createRecipe =async (newRecipe: Recipe) => {
    await this.getConnection()("recipe")
    .insert(newRecipe)
  }

  public getById = async ( id: string) => {
    const [result] = await this.getConnection()("recipe")
      .select("*")
      .where({ id });
    return result;
  };
}