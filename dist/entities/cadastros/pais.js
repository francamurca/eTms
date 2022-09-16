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
exports.Pais = void 0;
const typeorm_1 = require("typeorm");
const estado_1 = require("./estado");
let Pais = class Pais {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int4"),
    __metadata("design:type", Number)
], Pais.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Pais.prototype, "nome_pais", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => estado_1.Estado, estados => estados.pais),
    __metadata("design:type", Array)
], Pais.prototype, "estados", void 0);
Pais = __decorate([
    (0, typeorm_1.Entity)("pais")
], Pais);
exports.Pais = Pais;
/*
CREATE TABLE "TMS"."Pais" (
    id int4 NOT NULL,
    "Nome_Pais" varchar(50) NOT NULL,
    CONSTRAINT pais_pk PRIMARY KEY (id)
);

*/ 
