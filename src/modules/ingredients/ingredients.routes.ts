import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import IngredientsRepository from './ingredients.repository';
import CreateIngredientService from './services/create-ingredient.service';

const ingredientsRouter = Router();

// const ingredientsRepository = new IngredientsRepository();

ingredientsRouter.get('/', async (request, response) => {
  const ingredientsRepository = getCustomRepository(IngredientsRepository);
  const ingredients = await ingredientsRepository.find();

  return response.json(ingredients);
});

ingredientsRouter.post('/', async (request, response) => {
  const { ingredientName, ingredientAmount, ingredientPrice } = request.body;

  const createIngredient = new CreateIngredientService();

  const ingredient = await createIngredient.execute({
    ingredientName,
    ingredientAmount,
    ingredientPrice,
  });

  return response.json(ingredient);
});

export default ingredientsRouter;
