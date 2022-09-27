"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1664304410763 = void 0;
class default1664304410763 {
    constructor() {
        this.name = 'default1664304410763';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "teste"."endereco" RENAME COLUMN "complenento" TO "complemento"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "complemento" character varying(60)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "bairro" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "cidade" character varying(60) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "uf" character varying(2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "cep" character varying(9) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "cod_municipio" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "cod_uf" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "latitude" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "longitude" character varying(20)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "website" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "email" character varying(100)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "telefone1" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "telefone2" character varying(14)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "serie_cte" character varying(3)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "serie_nfe" character varying(3)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "serie_mdfe" character varying(3)`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" ADD "hash" character varying(100)`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "hash"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "serie_mdfe"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "serie_nfe"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "serie_cte"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "telefone2"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "telefone1"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "website"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "longitude"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "latitude"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "cod_uf"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "cod_municipio"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "uf"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "cidade"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "bairro"`);
        await queryRunner.query(`ALTER TABLE "teste"."empresa" DROP COLUMN "complemento"`);
        await queryRunner.query(`ALTER TABLE "teste"."endereco" RENAME COLUMN "complemento" TO "complenento"`);
    }
}
exports.default1664304410763 = default1664304410763;
