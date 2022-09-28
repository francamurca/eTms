import { MigrationInterface, QueryRunner } from "typeorm";

export class default1664367839236 implements MigrationInterface {
    name = 'default1664367839236'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "serie_mdfe"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "serie_cte"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "serie_nfe"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "insc_municipal" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "regime_simples" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "regime_simples"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "insc_municipal"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "serie_nfe" character varying(3)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "serie_cte" character varying(3)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "serie_mdfe" character varying(3)`);
    }

}
