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
exports.Pessoa = void 0;
const typeorm_1 = require("typeorm");
const cliente_1 = require("./cliente");
const dados_bancarios_pag_1 = require("./dados_bancarios_pag");
const endereco_1 = require("./endereco");
const motorista_1 = require("./motorista");
const proprietario_veiculos_1 = require("./proprietario_veiculos");
const telefone_1 = require("./telefone");
const types = __importStar(require("../../common/data-types"));
// export enum CatPessoa{
// 	Cliente ="Cliente",
// 	Fornecedor= "Fornecedor",  
// 	ProprietarioVeiculo = "Proprietario Veiculo", 
// 	Motorista = "Motorista", 
// 	Vendedor = "Vendedor",
// 	ComissariaGargas = "Comissaria Gargas", 
// 	Redespachante = "Redespachante", 
// 	Parceiro = "Parceiro", 
// 	PrestadorAutonomo = "Prestador Autonomo", 
// 	Funcionario = "Funcionario", 
//   ArmazemGeral = "Armazem Geral", 
//   AgenciaMaritima = "Agencia Maritima"
/*
{Cliente, Fornecedor, Proprietario Veiculo, Motorista, Vendedor, Comissaria Gargas, Redespachante, Parceiro, Prestador Autonomo, Funcionario, Armazem Geral, Agencia Maritima}
*/
//}
let Pessoa = class Pessoa {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Pessoa.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    (0, typeorm_1.Index)({ unique: true }),
    __metadata("design:type", String)
], Pessoa.prototype, "cnpj_cpf", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Pessoa.prototype, "razao_social", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Pessoa.prototype, "fantasia", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Pessoa.prototype, "ie_rg", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", Date)
], Pessoa.prototype, "dt_nasc", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20, nullable: true }),
    __metadata("design:type", String)
], Pessoa.prototype, "cod_contabil", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "bool", default: true }),
    __metadata("design:type", Boolean)
], Pessoa.prototype, "ativo", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeorm_1.Timestamp)
], Pessoa.prototype, "dt_cadastro", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Pessoa.prototype, "cadastrado_por", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeorm_1.Timestamp)
], Pessoa.prototype, "dt_Alteracao", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], Pessoa.prototype, "alterador_por", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200, array: true }),
    __metadata("design:type", String)
], Pessoa.prototype, "cat_pessoa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: types.TipoContribuinte }),
    __metadata("design:type", Number)
], Pessoa.prototype, "tipo_contrib", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], Pessoa.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => endereco_1.Endereco, enderecos => enderecos.pessoa, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Pessoa.prototype, "enderecos", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => cliente_1.Cliente, cliente => cliente.pessoa, { eager: true, cascade: true }),
    __metadata("design:type", cliente_1.Cliente)
], Pessoa.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => telefone_1.Telefone, telefones => telefones.pessoa, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Pessoa.prototype, "telefones", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dados_bancarios_pag_1.DadosBancariosPag, dadosbancarios => dadosbancarios.pessoa, { eager: true, cascade: true }),
    __metadata("design:type", Array)
], Pessoa.prototype, "dadosbancarios", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => proprietario_veiculos_1.ProprietarioVeiculo, proprietarioVeiculo => proprietarioVeiculo.pessoa, { eager: true, cascade: true }),
    __metadata("design:type", proprietario_veiculos_1.ProprietarioVeiculo)
], Pessoa.prototype, "proprietarioVeiculo", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => motorista_1.Motorista, motorista => motorista.pessoa, { eager: true, cascade: true }),
    __metadata("design:type", motorista_1.Motorista)
], Pessoa.prototype, "motorista", void 0);
Pessoa = __decorate([
    (0, typeorm_1.Entity)("pessoa")
], Pessoa);
exports.Pessoa = Pessoa;
