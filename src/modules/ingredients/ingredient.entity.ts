import { uuid } from 'uuidv4';

class Ingredient {
  id: string;

  name: string;

  amount: string;

  price: string;

  constructor(name: string, amount: string, price: string) {
    this.id = uuid();
    this.name = name;
    this.amount = amount;
    this.price = price;
  }
}

export default Ingredient;
