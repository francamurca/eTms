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
exports.ProprietarioVeiculo = void 0;
const typeorm_1 = require("typeorm");
const pessoa_1 = require("./pessoa");
const veiculo_1 = require("./veiculo");
let ProprietarioVeiculo = class ProprietarioVeiculo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ProprietarioVeiculo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 9 }),
    __metadata("design:type", String)
], ProprietarioVeiculo.prototype, "rntrc", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], ProprietarioVeiculo.prototype, "validade_rntrc", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProprietarioVeiculo.prototype, "ativo", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProprietarioVeiculo.prototype, "reter_inss", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], ProprietarioVeiculo.prototype, "reter_irpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: false }),
    __metadata("design:type", String)
], ProprietarioVeiculo.prototype, "nis", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 0 }),
    __metadata("design:type", Number)
], ProprietarioVeiculo.prototype, "nro_dependentes", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], ProprietarioVeiculo.prototype, "com_contrato", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => pessoa_1.Pessoa, pessoa => pessoa.proprietarioVeiculo),
    (0, typeorm_1.JoinColumn)({
        name: "pessoa_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", pessoa_1.Pessoa)
], ProprietarioVeiculo.prototype, "pessoa", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => veiculo_1.Veiculo, veiculos => veiculos.proprietario),
    __metadata("design:type", Array)
], ProprietarioVeiculo.prototype, "veiculos", void 0);
ProprietarioVeiculo = __decorate([
    (0, typeorm_1.Entity)("proprietario_veiculo")
], ProprietarioVeiculo);
exports.ProprietarioVeiculo = ProprietarioVeiculo;
