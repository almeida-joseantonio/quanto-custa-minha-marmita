import { getRepository, Repository } from 'typeorm';

import Ingredient, { IngredientUnitType } from './ingredient.entity';

interface CreateIngredientDTO {
  ingredientName: string;
  ingredientAmount: number;
  ingredientUnit: IngredientUnitType;
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
    ingredientUnit,
    ingredientPrice,
  }: CreateIngredientDTO): Promise<Ingredient> {
    const ingredient = this.ormRepository.create({
      ingredientName,
      ingredientAmount,
      ingredientUnit,
      ingredientPrice,
    });

    await this.ormRepository.save(ingredient);

    return ingredient;
  }

  // public async findById(ingredientId: string): Promise<Ingredient | undefined> {
  //   const findById = await this.ormRepository.findOne({
  //     where: {
  //       ingredientId,
  //     },
  //   });

  //   return findById || undefined;
  // }

  public async findAll(): Promise<Ingredient[]> {
    const ingredients = await this.ormRepository.find();

    return ingredients;
  }
}

export default IngredientsRepository;
