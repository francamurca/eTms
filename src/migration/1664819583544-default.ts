import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664819583544 implements MigrationInterface {
    name = 'default1664819583544'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME COLUMN "tipo_combustivel" TO "combustivel"`);
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME CONSTRAINT "UQ_292aa95bac537e1b4bc16660297" TO "UQ_7caf6da06e1d236ba213e96f4f4"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME CONSTRAINT "UQ_7caf6da06e1d236ba213e96f4f4" TO "UQ_292aa95bac537e1b4bc16660297"`);
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME COLUMN "combustivel" TO "tipo_combustivel"`);
    }

}
