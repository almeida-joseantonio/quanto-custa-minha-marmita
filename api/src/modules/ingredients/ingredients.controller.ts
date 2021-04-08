import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateIngredientService from './services/create-ingredient.service';

export default class IngredientsController {
  // public async index(request: Request, response: Response): Promise<Response> {
  //   const listIngredients = container.resolve(ListIngredientsService);

  //   const ingredients = await listIngredients.execute({});

  //   return response.status(200).json(ingredients);
  // }

  public async create(request: Request, response: Response): Promise<Response> {
    const { ingredientName, ingredientAmount, ingredientPrice } = request.body;

    const createIngredient = container.resolve(CreateIngredientService);

    const ingredient = await createIngredient.execute({
      ingredientName,
      ingredientAmount,
      ingredientPrice,
    });

    return response.status(201).json(ingredient);
  }
}
