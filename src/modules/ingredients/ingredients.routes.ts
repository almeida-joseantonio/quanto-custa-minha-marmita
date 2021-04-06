import { Router } from 'express';

import IngredientsRepository from './ingredients.repository';
import CreateIngredientService from './services/create-ingredient.service';

const ingredientsRouter = Router();

const ingredientsRepository = new IngredientsRepository();

ingredientsRouter.post('/', (request, response) => {
  const { name, amount, price } = request.body;

  const createIngredient = new CreateIngredientService(ingredientsRepository);

  const ingredient = createIngredient.execute({ name, amount, price });

  return response.json(ingredient);
});

export default ingredientsRouter;
