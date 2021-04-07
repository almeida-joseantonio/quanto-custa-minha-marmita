import { EntityRepository, Repository } from 'typeorm';

import Ingredient from './ingredient.entity';

interface CreateIngredientDTO {
  ingredientName: string;
  ingredientAmount: number;
  ingredientPrice: number;
}

@EntityRepository(Ingredient)
class IngredientsRepository extends Repository<Ingredient> {
  public async findById(ingredientId: string): Promise<Ingredient | undefined> {
    const findById = await this.findOne({
      where: {
        ingredientId,
      },
    });

    return findById || undefined;
  }
}

export default IngredientsRepository;
