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
exports.Tipo_Endereco = void 0;
const typeorm_1 = require("typeorm");
const endereco_1 = require("./endereco");
let Tipo_Endereco = class Tipo_Endereco {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Tipo_Endereco.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Tipo_Endereco.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => endereco_1.Endereco, enderecos => enderecos.tipoEndereco),
    __metadata("design:type", Array)
], Tipo_Endereco.prototype, "enderecos", void 0);
Tipo_Endereco = __decorate([
    (0, typeorm_1.Entity)("tipo_endereco")
], Tipo_Endereco);
exports.Tipo_Endereco = Tipo_Endereco;
