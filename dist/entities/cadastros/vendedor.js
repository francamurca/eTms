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
exports.Vendedor = void 0;
const typeorm_1 = require("typeorm");
const cliente_1 = require("./cliente");
let Vendedor = class Vendedor {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Vendedor.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 3, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Vendedor.prototype, "perc_comissao", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Vendedor.prototype, "validate", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Vendedor.prototype, "incluido_por", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Vendedor.prototype, "dt_inclusao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Vendedor.prototype, "alterado_por", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Vendedor.prototype, "dt_alteracao", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cliente_1.Cliente, clientes => clientes.vendedor),
    __metadata("design:type", Array)
], Vendedor.prototype, "clientes", void 0);
Vendedor = __decorate([
    (0, typeorm_1.Entity)("vendedor")
], Vendedor);
exports.Vendedor = Vendedor;
