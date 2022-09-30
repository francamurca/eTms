"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rota = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class Rota {
    constructor() {
        this.result = fs_1.default
            .readdirSync(__dirname)
            .filter(file => ((file.indexOf('.')) !== 0 && (file !== 'index.js')))
            .forEach((file => require(path_1.default.resolve(__dirname, file))(Rota)));
    }
}
exports.Rota = Rota;
;
