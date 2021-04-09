import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateRecipesService from './services/create-recipes.service';
import ListRecipesService from './services/list-recipes.service';

export default class RecipesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRecipes = container.resolve(ListRecipesService);

    const recipes = await listRecipes.execute();

    return response.status(200).json(recipes);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { recipeName } = request.body;

    const createRecipe = container.resolve(CreateRecipesService);

    const recipe = await createRecipe.execute({
      recipeName,
    });

    return response.status(201).json(recipe);
  }
}
