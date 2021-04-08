import { Router } from 'express';
import ingredientsRoutes from '../../modules/ingredients/ingredients.routes';
import recipesRoutes from '../../modules/recipes/recipes.routes';

const routes = Router();

routes.use('/ingredients', ingredientsRoutes);
routes.use('/recipes', recipesRoutes);

export default routes;
