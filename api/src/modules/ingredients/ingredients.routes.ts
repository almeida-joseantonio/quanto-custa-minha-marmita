import { Router } from 'express';
import IngredientsController from './ingredients.controller';

const ingredientsRouter = Router();

const ingredientsController = new IngredientsController();

// ingredientsRouter.get('/', ingredientsController.index);
ingredientsRouter.post('/', ingredientsController.create);

export default ingredientsRouter;
