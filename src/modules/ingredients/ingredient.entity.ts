import { v4 as uuidv4 } from 'uuid';

class Ingredient {
  id: string;

  name: string;

  amount: string;

  price: string;

  constructor({ name, amount, price }: Omit<Ingredient, 'id'>) {
    this.id = uuidv4();
    this.name = name;
    this.amount = amount;
    this.price = price;
  }
}

export default Ingredient;
