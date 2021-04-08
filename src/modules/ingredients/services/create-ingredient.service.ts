import { inject, injectable } from 'tsyringe';

import Ingredient from '../ingredient.entity';
import IngredientsRepository from '../ingredients.repository';

interface IRequest {
  ingredientName: string;
  ingredientAmount: number;
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
    ingredientPrice,
  }: IRequest): Promise<Ingredient> {
    const ingredient = await this.ingredientsRepository.create({
      ingredientName,
      ingredientAmount,
      ingredientPrice,
    });

    return ingredient;
  }
}

export default CreateIngredientService;
