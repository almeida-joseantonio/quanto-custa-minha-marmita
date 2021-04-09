import { getRepository, Repository } from 'typeorm';

import Recipe from './recipe.entity';

interface CreateRecipeDTO {
  recipeName: string;
}

class RecipesRepository {
  private ormRepository: Repository<Recipe>;

  constructor() {
    this.ormRepository = getRepository(Recipe);
  }

  public async create({ recipeName }: CreateRecipeDTO): Promise<Recipe> {
    const recipe = this.ormRepository.create({
      recipeName,
    });

    await this.ormRepository.save(recipe);

    return recipe;
  }

  // public async findById(ingredientId: string): Promise<Ingredient | undefined> {
  //   const findById = await this.ormRepository.findOne({
  //     where: {
  //       ingredientId,
  //     },
  //   });

  //   return findById || undefined;
  // }

  public async findAll(): Promise<Recipe[]> {
    const recipes = await this.ormRepository.find();

    return recipes;
  }
}

export default RecipesRepository;
