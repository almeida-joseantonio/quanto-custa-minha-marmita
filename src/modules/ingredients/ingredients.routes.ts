import { Router } from 'express';

import Ingredient from './ingredient.entity';

const ingredientsRouter = Router();

const ingredients: Ingredient[] = [];

ingredientsRouter.post('/', (request, response) => {
  const { name, amount, price } = request.body;

  const ingredient = new Ingredient(name, amount, price);

  ingredients.push(ingredient);

  return response.json(ingredient);
});

export default ingredientsRouter;
