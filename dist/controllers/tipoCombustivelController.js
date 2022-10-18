"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoCombustivelController = void 0;
const data_source_1 = require("../data-source");
const tipo_combustivel_1 = require("../entities/cadastros/tipo_combustivel");
const useRepo = data_source_1.Conn.getRepository(tipo_combustivel_1.TipoCombustivel);
class TipoCombustivelController {
    async create(req, res) {
        try {
            const novo = req.body;
            console.log(novo);
            const tipoCombustivel = useRepo.create(novo);
            await useRepo.save(tipoCombustivel);
            res.status(201).json(tipoCombustivel);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro Criar Cadastro de Tipo de Combustivel', erro });
        }
    }
    async update(req, res) {
        try {
            const newTipoCombustivel = req.body;
            const _id = Number(req.params.id);
            let tipoCombustivel = await useRepo.findOneBy({ id: _id });
            if (tipoCombustivel.id > 0) {
                try {
                    useRepo.merge(tipoCombustivel, newTipoCombustivel);
                    const results = await useRepo.save(tipoCombustivel);
                    res.status(202).json(results);
                }
                catch (erro) {
                    return res.status(400).send({ error: 'Erro em alterar Cadastro de Tipo de Combustivel', erro });
                }
            }
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em alterar Cadastro de Pessoas', erro });
        }
    }
    async findAll(req, res) {
        try {
            const tipoCombustivel = await useRepo.find();
            res.status(200).json(tipoCombustivel);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em listas Cadastro de Tipo de Combustivel', erro });
        }
    }
    async findOne(req, res) {
        try {
            const _id = Number(req.params.id);
            console.log(_id);
            const pessoa = await useRepo.findOneBy({ id: _id });
            console.log(pessoa);
            res.status(200).json(pessoa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
}
exports.TipoCombustivelController = TipoCombustivelController;
