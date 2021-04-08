import { getRepository, Repository } from 'typeorm';

import Ingredient from './ingredient.entity';

interface CreateIngredientDTO {
  ingredientName: string;
  ingredientAmount: number;
  ingredientPrice: number;
}

class IngredientsRepository {
  private ormRepository: Repository<Ingredient>;

  constructor() {
    this.ormRepository = getRepository(Ingredient);
  }

  public async create({
    ingredientName,
    ingredientAmount,
    ingredientPrice,
  }: CreateIngredientDTO): Promise<Ingredient> {
    const ingredient = this.ormRepository.create({
      ingredientName,
      ingredientAmount,
      ingredientPrice,
    });

    await this.ormRepository.save(ingredient);

    return ingredient;
  }

  public async findById(ingredientId: string): Promise<Ingredient | undefined> {
    const findById = await this.ormRepository.findOne({
      where: {
        ingredientId,
      },
    });

    return findById || undefined;
  }
}

export default IngredientsRepository;
