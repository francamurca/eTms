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
exports.Endereco = void 0;
const typeorm_1 = require("typeorm");
const cidade_1 = require("./cidade");
const pessoa_1 = require("./pessoa");
const tipo_endereco_1 = require("./tipo_endereco");
let Endereco = class Endereco {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Endereco.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "logradouro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "complemento", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 60, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "bairro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 8, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "cep", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Endereco.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cidade_1.Cidade, cidade => cidade.enederecos, { eager: true, cascade: true }),
    (0, typeorm_1.JoinColumn)({
        name: "cod_municipio",
        referencedColumnName: "cod_municipio"
    }),
    __metadata("design:type", cidade_1.Cidade)
], Endereco.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoa_1.Pessoa, pessoa => pessoa.enderecos, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: "pessoa_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", pessoa_1.Pessoa)
], Endereco.prototype, "pessoa", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => tipo_endereco_1.Tipo_Endereco, tipoEndereco => tipoEndereco.enderecos, { onUpdate: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: "tipo_endereco",
        referencedColumnName: "id"
    }),
    __metadata("design:type", tipo_endereco_1.Tipo_Endereco)
], Endereco.prototype, "tipoEndereco", void 0);
Endereco = __decorate([
    (0, typeorm_1.Entity)("endereco")
], Endereco);
exports.Endereco = Endereco;
