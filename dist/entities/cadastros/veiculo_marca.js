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
exports.VeiculoMarca = void 0;
const typeorm_1 = require("typeorm");
const veiculo_1 = require("./veiculo");
const veiculo_modelo_1 = require("./veiculo_modelo");
let VeiculoMarca = class VeiculoMarca {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], VeiculoMarca.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, unique: true }),
    __metadata("design:type", String)
], VeiculoMarca.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => veiculo_1.Veiculo, veiculo => veiculo.marca),
    __metadata("design:type", veiculo_1.Veiculo)
], VeiculoMarca.prototype, "veiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => veiculo_modelo_1.VeiculoModelo),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], VeiculoMarca.prototype, "modelos", void 0);
VeiculoMarca = __decorate([
    (0, typeorm_1.Entity)("veiculo_marca")
], VeiculoMarca);
exports.VeiculoMarca = VeiculoMarca;
