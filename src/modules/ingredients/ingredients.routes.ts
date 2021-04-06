import { Router } from 'express';

import IngredientsRepository from './ingredients.repository';

const ingredientsRouter = Router();

const ingredientsRepository = new IngredientsRepository();

ingredientsRouter.post('/', (request, response) => {
  const { name, amount, price } = request.body;

  const ingredient = ingredientsRepository.create({ name, amount, price });

  return response.json(ingredient);
});

export default ingredientsRouter;
