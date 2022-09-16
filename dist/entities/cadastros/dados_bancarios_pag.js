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
exports.DadosBancariosPag = void 0;
const typeorm_1 = require("typeorm");
const banco_1 = require("./banco");
const pessoa_1 = require("./pessoa");
const type = __importStar(require("../../common/data-types"));
let DadosBancariosPag = class DadosBancariosPag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DadosBancariosPag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: type.TipoConta, default: type.TipoConta["conta corrente"] }),
    __metadata("design:type", Number)
], DadosBancariosPag.prototype, "tipo_conta", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 10 }),
    __metadata("design:type", String)
], DadosBancariosPag.prototype, "agencia_numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1 }),
    __metadata("design:type", String)
], DadosBancariosPag.prototype, "agencia_digito", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 20 }),
    __metadata("design:type", String)
], DadosBancariosPag.prototype, "conta_numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 1 }),
    __metadata("design:type", String)
], DadosBancariosPag.prototype, "conta_digito", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: type.TipoChavePix, nullable: true }),
    __metadata("design:type", Number)
], DadosBancariosPag.prototype, "tipo_chave_pix", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100, nullable: true }),
    __metadata("design:type", String)
], DadosBancariosPag.prototype, "chave_pix", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => banco_1.Banco, banco => banco.dadosbancarios, { eager: true }),
    (0, typeorm_1.JoinColumn)({
        name: "banco_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", banco_1.Banco)
], DadosBancariosPag.prototype, "banco", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => pessoa_1.Pessoa, pessoa => pessoa.dadosbancarios),
    (0, typeorm_1.JoinColumn)({
        name: "pessoa_id",
        referencedColumnName: "id"
    }),
    __metadata("design:type", pessoa_1.Pessoa)
], DadosBancariosPag.prototype, "pessoa", void 0);
DadosBancariosPag = __decorate([
    (0, typeorm_1.Entity)("dados_bancarios_pag")
], DadosBancariosPag);
exports.DadosBancariosPag = DadosBancariosPag;
