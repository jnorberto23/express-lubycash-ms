import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1638880777129 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');
    await queryRunner.createTable(
      new Table({
        name: "users",

        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
            generationStrategy: "uuid",
            default: "uuid_generate_v4()",
          },
          {
            name: "full_name",
            type: "varchar",
          },
          {
            name: "email",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "phone",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "cpf_number",
            type: "varchar",
            isUnique: true,
          },
          {
            name: "address",
            type: "varchar",
          },
          {
            name: "city",
            type: "varchar",
          },
          {
            name: "state",
            type: "varchar",
          },
          {
            name: "zipcode",
            type: "varchar",
          },
          {
            name: "current_balance",
            type: "float",
          },
          {
            name: "average_salary",
            type: "float",
          },
          {
            name: 'status',
            type: 'varchar'
          },
          {
            name: "token",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "token_created_at",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");
    await queryRunner.query('DROP EXTENSION "uuid-ossp"');
  }
}
