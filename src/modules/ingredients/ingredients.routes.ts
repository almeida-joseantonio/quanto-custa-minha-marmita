import { Router } from 'express';

const ingredientsRouter = Router();

ingredientsRouter.post('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

export default ingredientsRouter;
