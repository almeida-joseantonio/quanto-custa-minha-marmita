import Ingredient from './ingredient.entity';

interface CreateIngredientDTO {
  name: string;
  amount: string;
  price: string;
}

class IngredientsRepository {
  private ingredients: Ingredient[];

  constructor() {
    this.ingredients = [];
  }

  public create({ name, amount, price }: CreateIngredientDTO): Ingredient {
    const ingredient = new Ingredient({ name, amount, price });

    this.ingredients.push(ingredient);

    return ingredient;
  }
}

export default IngredientsRepository;
