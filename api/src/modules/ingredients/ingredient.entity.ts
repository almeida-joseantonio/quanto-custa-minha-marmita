import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('ingredients')
class Ingredient {
  @PrimaryGeneratedColumn('uuid', { name: 'ingredient_id' })
  ingredientId: string;

  @Column({ name: 'ingredient_name' })
  ingredientName: string;

  @Column({
    name: 'ingredient_amount',
    type: 'decimal',
    precision: 12,
    scale: 2,
  })
  ingredientAmount: number;

  @Column({
    name: 'ingredient_price',
    type: 'decimal',
    precision: 12,
    scale: 2,
  })
  ingredientPrice: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export default Ingredient;
