"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default1664819583544 = void 0;
class default1664819583544 {
    constructor() {
        this.name = 'default1664819583544';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME COLUMN "tipo_combustivel" TO "combustivel"`);
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME CONSTRAINT "UQ_292aa95bac537e1b4bc16660297" TO "UQ_7caf6da06e1d236ba213e96f4f4"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME CONSTRAINT "UQ_7caf6da06e1d236ba213e96f4f4" TO "UQ_292aa95bac537e1b4bc16660297"`);
        await queryRunner.query(`ALTER TABLE "teste"."tipo_combustivel" RENAME COLUMN "combustivel" TO "tipo_combustivel"`);
    }
}
exports.default1664819583544 = default1664819583544;
