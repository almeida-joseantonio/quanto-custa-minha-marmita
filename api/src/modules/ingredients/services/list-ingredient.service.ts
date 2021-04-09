import { injectable, inject } from 'tsyringe';

import IngredientsRepository from '../ingredients.repository';
import Ingredient from '../ingredient.entity';

@injectable()
class ListIngredientsService {
  constructor(
    @inject('IngredientsRepository')
    private ingredientsRepository: IngredientsRepository,
  ) {}

  public async execute(): Promise<Ingredient[]> {
    const ingredients = await this.ingredientsRepository.findAll();

    return ingredients;
  }
}

export default ListIngredientsService;
