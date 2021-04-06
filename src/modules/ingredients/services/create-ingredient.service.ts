import Ingredient from '../ingredient.entity';
import IngredientsRepository from '../ingredients.repository';

interface IRequest {
  name: string;
  amount: string;
  price: string;
}

class CreateIngredientService {
  private ingredientsRepository: IngredientsRepository;

  constructor(ingredientsRepository: IngredientsRepository) {
    this.ingredientsRepository = ingredientsRepository;
  }

  public execute({ name, amount, price }: IRequest): Ingredient {
    const ingredient = this.ingredientsRepository.create({
      name,
      amount,
      price,
    });

    return ingredient;
  }
}

export default CreateIngredientService;
