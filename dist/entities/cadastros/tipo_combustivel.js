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
exports.TipoCombustivel = void 0;
const typeorm_1 = require("typeorm");
const veiculo_1 = require("./veiculo");
let TipoCombustivel = class TipoCombustivel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoCombustivel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, unique: true }),
    __metadata("design:type", String)
], TipoCombustivel.prototype, "combustivel", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => veiculo_1.Veiculo, veiculos => veiculos.tipoCombustivel),
    __metadata("design:type", Array)
], TipoCombustivel.prototype, "veiculos", void 0);
TipoCombustivel = __decorate([
    (0, typeorm_1.Entity)("tipo_combustivel")
], TipoCombustivel);
exports.TipoCombustivel = TipoCombustivel;
