import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateIngredients1617817012779
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'ingredients',
        columns: [
          {
            name: 'ingredient_id',
            type: 'uuid',
            isPrimary: true,
            isNullable: false,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'ingredient_name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'ingredient_amount',
            type: 'decimal(12,2)',
            isNullable: true,
          },
          {
            name: 'ingredient_unit',
            type: 'enum',
            enum: ['un', 'g', 'ml'],
            isNullable: true,
          },
          {
            name: 'ingredient_price',
            type: 'decimal(12,2)',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('ingredients');
  }
}
