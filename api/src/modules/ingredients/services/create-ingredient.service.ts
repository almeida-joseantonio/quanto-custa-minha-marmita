import { inject, injectable } from 'tsyringe';

import Ingredient, { IngredientUnitType } from '../ingredient.entity';
import IngredientsRepository from '../ingredients.repository';

interface IRequest {
  ingredientName: string;
  ingredientAmount: number;
  ingredientUnit: IngredientUnitType;
  ingredientPrice: number;
}

@injectable()
class CreateIngredientService {
  constructor(
    @inject('IngredientsRepository')
    private ingredientsRepository: IngredientsRepository,
  ) {}

  public async execute({
    ingredientName,
    ingredientAmount,
    ingredientUnit,
    ingredientPrice,
  }: IRequest): Promise<Ingredient> {
    if (ingredientUnit === 'g') {
      // eslint-disable-next-line no-param-reassign
      ingredientAmount /= 1000;
    }

    const ingredient = await this.ingredientsRepository.create({
      ingredientName,
      ingredientAmount,
      ingredientUnit,
      ingredientPrice,
    });

    return ingredient;
  }
}

export default CreateIngredientService;
