import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('recipes')
class Ingredient {
  @PrimaryGeneratedColumn('uuid', { name: 'recipe_id' })
  recipeId: string;

  @Column({ name: 'recipe_name' })
  recipeName: string;

  @Column({
    name: 'recipe_cost',
    type: 'decimal',
    precision: 12,
    scale: 2,
  })
  recipeCost: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}

export default Ingredient;
