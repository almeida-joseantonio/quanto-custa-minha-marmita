import { Router } from 'express';

const recipesRouter = Router();

recipesRouter.post('/', (request, response) => {
  return response.json({ messa: 'Hello World' });
});

export default recipesRouter;
