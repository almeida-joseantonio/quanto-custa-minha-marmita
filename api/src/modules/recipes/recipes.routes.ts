import { Router } from 'express';
import RecipesController from './recipes.controller';

const recipesRouter = Router();

const recipesController = new RecipesController();

recipesRouter.get('/', recipesController.index);
recipesRouter.post('/', recipesController.create);

export default recipesRouter;
