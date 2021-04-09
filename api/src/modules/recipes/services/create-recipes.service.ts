import { inject, injectable } from 'tsyringe';

import Recipe from '../recipe.entity';
import RecipesRepository from '../recipes.repository';

interface IRequest {
  recipeName: string;
}

@injectable()
class CreateRecipesService {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: RecipesRepository,
  ) {}

  public async execute({ recipeName }: IRequest): Promise<Recipe> {
    const recipe = await this.recipesRepository.create({
      recipeName,
    });

    return recipe;
  }
}

export default CreateRecipesService;
