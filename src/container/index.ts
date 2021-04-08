import { container } from 'tsyringe';

import IngredientsRepository from '../modules/ingredients/ingredients.repository';

container.registerSingleton('IngredientsRepository', IngredientsRepository);
