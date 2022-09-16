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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataTypes = void 0;
const types = __importStar(require("../common/data-types"));
class DataTypes {
    dataTypes(req, res) {
        try {
            const tipo = String(req.params.datatype);
            const itens = [];
            let dataType;
            switch (tipo) {
                case "TipoContibuinte":
                    dataType = types.TipoContribuinte;
                    break;
                case "CatPessoa":
                    dataType = types.CatPessoa;
                    break;
                case "TipoFatumemento":
                    dataType = types.TipoFatumemento;
                    break;
                case "EstadoCivil":
                    dataType = types.EstadoCivil;
                    break;
                case "Sexo":
                    dataType = types.Sexo;
                    break;
                case "TagPedagio":
                    dataType = types.TagPedagio;
                    break;
                case "TipoChavePix":
                    dataType = types.TipoChavePix;
                    break;
                case "TipoConta":
                    dataType = types.TipoConta;
                    break;
                case "TipoDocumentoEletrorico":
                    dataType = types.TipoDocumentoEletrorico;
                    break;
                case "TipoFavorecido":
                    dataType = types.TipoFavorecido;
                    break;
                case "TipoVinculo":
                    dataType = types.TipoVinculo;
                    break;
                case "TipoTelefone":
                    dataType = types.TipoTelefone;
                    break;
                //sempre no final
                default: dataType = undefined;
            }
            if (dataType == undefined) {
                res.status(400).json({ erro: "Data type não encontrado!" });
            }
            else {
                for (let type in dataType) {
                    if (dataType.hasOwnProperty(type) &&
                        (isNaN(parseInt(type)))) {
                        itens.push(type);
                    }
                }
                res.status(200).json({ enum: tipo, itens });
            }
        }
        catch (error) {
            res.status(400).json({ erro: "Data type não encontrado!", error });
        }
    }
}
exports.DataTypes = DataTypes;
