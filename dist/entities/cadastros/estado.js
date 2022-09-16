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
exports.Estado = void 0;
const typeorm_1 = require("typeorm");
const cidade_1 = require("./cidade");
const pais_1 = require("./pais");
let Estado = class Estado {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)("int4"),
    __metadata("design:type", Number)
], Estado.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 2 }),
    __metadata("design:type", String)
], Estado.prototype, "UF", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Estado.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => cidade_1.Cidade, cidades => cidades.estado),
    __metadata("design:type", Array)
], Estado.prototype, "cidades", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pais_1.Pais, pais => pais.estados, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: "cod_pais",
        referencedColumnName: "id"
    }),
    __metadata("design:type", pais_1.Pais)
], Estado.prototype, "pais", void 0);
Estado = __decorate([
    (0, typeorm_1.Entity)("estado")
], Estado);
exports.Estado = Estado;
