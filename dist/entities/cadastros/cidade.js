"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cidade = void 0;
const typeorm_1 = require("typeorm");
const endereco_1 = require("./endereco");
const estado_1 = require("./estado");
const veiculo_1 = require("./veiculo");
let Cidade = class Cidade {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int4"),
    __metadata("design:type", Number)
], Cidade.prototype, "cod_municipio", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Cidade.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "numeric", default: 0.00, nullable: true }),
    __metadata("design:type", typeorm_1.Double)
], Cidade.prototype, "al_iss", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Cidade.prototype, "padrao_nfse", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => endereco_1.Endereco, enderecos => enderecos.cidade),
    __metadata("design:type", Array)
], Cidade.prototype, "enederecos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => estado_1.Estado, estado => estado.cidades, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: "cod_uf",
        referencedColumnName: "id",
    }),
    __metadata("design:type", estado_1.Estado)
], Cidade.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => veiculo_1.Veiculo, veiculo => veiculo.cod_municipio),
    __metadata("design:type", Array)
], Cidade.prototype, "veiculos", void 0);
Cidade = __decorate([
    (0, typeorm_1.Entity)("cidade")
], Cidade);
exports.Cidade = Cidade;
/*
CREATE TABLE "TMS"."Cidade" (
    "Cod_Municipio" int4 NOT NULL,
    "Cidade" varchar(100) NOT NULL,
    "UF" bpchar(2) NOT NULL,
    "Cod_UF" int4 NULL,
    "Al_Iss" numeric(3,2) NULL,
    "EmpresaAtende" int8 NULL,
    "Pais" int4 NOT NULL,
    "Padrao_NFSe" varchar(20) NULL,
    CONSTRAINT cidade_pk PRIMARY KEY ("Cod_Municipio")
);

ALTER TABLE "TMS"."Cidade" ADD CONSTRAINT cidade_fk FOREIGN KEY ("Pais") REFERENCES "Pais"(id);

*/ 
