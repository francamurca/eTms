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
exports.Veiculo = void 0;
const typeorm_1 = require("typeorm");
const cidade_1 = require("./cidade");
const proprietario_veiculos_1 = require("./proprietario_veiculos");
const tipo_carroceria_1 = require("./tipo_carroceria");
const tipo_combustivel_1 = require("./tipo_combustivel");
const tipo_veiculo_1 = require("./tipo_veiculo");
const veiculo_marca_1 = require("./veiculo_marca");
const veiculo_modelo_1 = require("./veiculo_modelo");
const type = __importStar(require("../../common/data-types"));
let Veiculo = class Veiculo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Veiculo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 9, unique: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "placa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_veiculo_1.TipoVeiculo, tipoVeiculo => tipoVeiculo.veiculos, { eager: true, }),
    (0, typeorm_1.JoinColumn)({
        name: "tipo_veiculo_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", tipo_veiculo_1.TipoVeiculo)
], Veiculo.prototype, "tipoVeiculo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_combustivel_1.TipoCombustivel, tipoCombustivel => tipoCombustivel.veiculos, { eager: true, }),
    (0, typeorm_1.JoinColumn)({
        name: "tipo_combustivel_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", tipo_combustivel_1.TipoCombustivel)
], Veiculo.prototype, "tipoCombustivel", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Number)
], Veiculo.prototype, "qtd_eixos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => veiculo_marca_1.VeiculoMarca, marca => marca.veiculo, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: "veiculo_marca_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", veiculo_marca_1.VeiculoMarca)
], Veiculo.prototype, "marca", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => veiculo_modelo_1.VeiculoModelo, modelo => modelo.veiculo, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: "veiculo_modelo_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", veiculo_modelo_1.VeiculoModelo)
], Veiculo.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Veiculo.prototype, "ano_fabricacao", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cidade_1.Cidade, cidade => cidade.veiculos, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: "cod_municipio",
        referencedColumnName: "cod_municipio"
    }),
    __metadata("design:type", Number)
], Veiculo.prototype, "cod_municipio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: type.TipoVinculo }),
    __metadata("design:type", Number)
], Veiculo.prototype, "vinculo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: type.TipoFavorecido }),
    __metadata("design:type", Number)
], Veiculo.prototype, "favorecido", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "categoria_pedagio", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "cor_cabine", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "cor_carroceria", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_carroceria_1.TipoCarroceria, tipoCarroceria => tipoCarroceria.veiculos),
    (0, typeorm_1.JoinColumn)({
        name: "tipo_carroceria_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", tipo_carroceria_1.TipoCarroceria)
], Veiculo.prototype, "tipoCarroceria", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Veiculo.prototype, "seg_validade", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "cod_sm", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "chassis", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "numero_motor", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "certificado", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 30, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "renavam", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "decimal", precision: 10, scale: 3, nullable: true }),
    __metadata("design:type", Number)
], Veiculo.prototype, "odometro", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Veiculo.prototype, "data_licenciamento", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Veiculo.prototype, "apolice_vencimento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Veiculo.prototype, "apolice_seguro", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: type.TagPedagio, default: type.TagPedagio["Não Informados"] }),
    __metadata("design:type", Number)
], Veiculo.prototype, "tag_pedagio", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => proprietario_veiculos_1.ProprietarioVeiculo, propietario => propietario.veiculos),
    (0, typeorm_1.JoinColumn)({
        name: "proprietario_veiculo_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", proprietario_veiculos_1.ProprietarioVeiculo)
], Veiculo.prototype, "proprietario", void 0);
Veiculo = __decorate([
    (0, typeorm_1.Entity)("veiculo")
], Veiculo);
exports.Veiculo = Veiculo;
