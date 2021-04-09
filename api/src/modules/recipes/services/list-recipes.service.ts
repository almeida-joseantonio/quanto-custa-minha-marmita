import { injectable, inject } from 'tsyringe';

import RecipesRepository from '../recipes.repository';
import Recipe from '../recipe.entity';

@injectable()
class ListRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: RecipesRepository,
  ) {}

  public async execute(): Promise<Recipe[]> {
    const recipes = await this.recipesRepository.findAll();

    return recipes;
  }
}

export default ListRecipesService;
