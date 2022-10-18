"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const data_source_1 = require("./data-source");
const pessoa_routes_1 = __importDefault(require("./routes/pessoa-routes"));
const empresa_routes_1 = __importDefault(require("./routes/empresa-routes"));
const empresa_routes_2 = __importDefault(require("./routes/empresa-routes"));
const banco_routes_1 = __importDefault(require("./routes/banco-routes"));
const tipoCombistivel_routes_1 = __importDefault(require("./routes/tipoCombistivel-routes"));
const veiculo_routes_1 = __importDefault(require("./routes/veiculo-routes"));
dotenv_1.default.config();
data_source_1.Conn.initialize().then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(pessoa_routes_1.default);
    app.use(empresa_routes_1.default);
    app.use(empresa_routes_2.default);
    app.use(banco_routes_1.default);
    app.use(tipoCombistivel_routes_1.default);
    app.use(veiculo_routes_1.default);
    return app.listen(process.env.PORT, () => { (console.log("Servidor OK")); });
});
