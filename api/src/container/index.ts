import { container } from 'tsyringe';

import IngredientsRepository from '../modules/ingredients/ingredients.repository';
import RecipesRepository from '../modules/recipes/recipes.repository';

container.registerSingleton('IngredientsRepository', IngredientsRepository);
container.registerSingleton('RecipesRepository', RecipesRepository);
