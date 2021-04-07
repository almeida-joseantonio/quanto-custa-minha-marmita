import { getCustomRepository } from 'typeorm';

import Ingredient from '../ingredient.entity';
import IngredientsRepository from '../ingredients.repository';

interface IRequest {
  ingredientName: string;
  ingredientAmount: number;
  ingredientPrice: number;
}

class CreateIngredientService {
  public async execute({
    ingredientName,
    ingredientAmount,
    ingredientPrice,
  }: IRequest): Promise<Ingredient> {
    const ingredientsRepository = getCustomRepository(IngredientsRepository);

    const ingredient = ingredientsRepository.create({
      ingredientName,
      ingredientAmount,
      ingredientPrice,
    });

    await ingredientsRepository.save(ingredient);

    return ingredient;
  }
}

export default CreateIngredientService;
