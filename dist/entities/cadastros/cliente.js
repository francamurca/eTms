"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const typeorm_1 = require("typeorm");
const pessoa_1 = require("./pessoa");
const vendedor_1 = require("./vendedor");
const type = __importStar(require("../../common/data-types"));
let Cliente = class Cliente {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], Cliente.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14 }),
    __metadata("design:type", String)
], Cliente.prototype, "cnpj_pag", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Cliente.prototype, "dt_mov", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "inadimplente", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "calc_frt_maior", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "cobrar_icms", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "reter_iss", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "insentar_rctrc", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false, nullable: true }),
    __metadata("design:type", Boolean)
], Cliente.prototype, "resp_seguro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 14, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "cnpj_seguradora", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "nome_seguradora", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "nr_apolice", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "nr_averbacao", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0.00, nullable: true }),
    __metadata("design:type", typeorm_1.Double)
], Cliente.prototype, "max_assegurado", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Cliente.prototype, "dt_vencimento_ddr", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: type.TipoFatumemento, default: type.TipoFatumemento.Eventual, nullable: true }),
    __metadata("design:type", String)
], Cliente.prototype, "tipo_faturamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Cliente.prototype, "redespachante_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bigint", nullable: true }),
    __metadata("design:type", Number)
], Cliente.prototype, "vendedor_id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeorm_1.Timestamp)
], Cliente.prototype, "dt_cadastro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "cadastrado_por", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeorm_1.Timestamp)
], Cliente.prototype, "dt_Alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: false }),
    __metadata("design:type", String)
], Cliente.prototype, "alterador_por", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pessoa_1.Pessoa, pessoa => pessoa.cliente),
    (0, typeorm_1.JoinColumn)({
        name: "pessoa_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", pessoa_1.Pessoa
    // @OneToOne(() => Pessoa, pessoa => pessoa.redespachante)
    // @JoinColumn({
    // 	name: "redespachante_id",
    // 	referencedColumnName: "id"
    //  })
    )
], Cliente.prototype, "pessoa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => vendedor_1.Vendedor, vendedor => vendedor.clientes, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: "vendedor_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", vendedor_1.Vendedor)
], Cliente.prototype, "vendedor", void 0);
Cliente = __decorate([
    (0, typeorm_1.Entity)("cliente")
], Cliente);
exports.Cliente = Cliente;
/*
CREATE TABLE "Cliente" (
    "Id" bigserial NOT NULL,
    "Id_Pessoa" int8 NOT NULL,
    "Cnpj_Pag" varchar(14) NOT NULL,
    "Dt_mov" date NULL,
    "Ativo" bool NULL,
    "Inadimplente" bool NULL,
    "Calc_Frt_maior" bool NULL,
    "Cob_Icms" bool NULL,
    "Reter_Iss" bool NULL,
    "Seg_Proprio" bool NULL,
    "Cnpj_Seg" varchar(14) NULL,
    "Razao_Social_Seg" varchar(100) NULL,
    "Nr_Apolice" varchar(30) NULL,
    "Nr_Averbacao" varchar(30) NULL,
    "Dt_Vencimento_DDR" date NULL,
    "Isentar_RCTRC" bool NULL,
    "Vlr_Max_Asegurado" numeric(15,2) NULL,
    "Tipo_Faturamento" "TMS".tipo_faturamento NULL,
    "Redespachante" int8 NULL,
    "Vendedor" int8 NULL,
    CONSTRAINT cliente_pk PRIMARY KEY ("Id")
);
CREATE UNIQUE INDEX cliente_cnpj_pag_idx ON "TMS"."Cliente" USING btree ("Cnpj_Pag", "Id_Pessoa");

ALTER TABLE "TMS"."Cliente" ADD CONSTRAINT cliente_fk FOREIGN KEY ("Id_Pessoa") REFERENCES "Pessoa"(id);

*/ 
