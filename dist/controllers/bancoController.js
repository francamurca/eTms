"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoController = void 0;
const data_source_1 = require("../data-source");
const banco_1 = require("../entities/cadastros/banco");
const useRepo = data_source_1.Conn.getRepository(banco_1.Banco);
class BancoController {
    async update(req, res) {
        try {
            const newBanco = req.body;
            const _id = Number(req.params.id);
            let banco = await useRepo.findOneBy({ id: _id });
            if (banco.id > 0) {
                try {
                    useRepo.merge(banco, newBanco);
                    const results = await useRepo.save(banco);
                    res.status(202).json(results);
                }
                catch (erro) {
                    return res.status(400).send({ error: 'Erro em alterar Cadastro de Banco', erro });
                }
            }
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em alterar Cadastro de Banco', erro });
        }
    }
    async create(req, res) {
        try {
            const novo = req.body;
            const banco = useRepo.create(novo);
            await useRepo.save(banco);
            res.status(201).json(banco);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro Criar Cadastro de Banco', erro });
        }
    }
    async findOne(req, res) {
        try {
            const _id = Number(req.params.id);
            const banco = await useRepo.findOneBy({ id: _id });
            res.status(200).json(banco);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
    async findAll(req, res) {
        try {
            const banco = await useRepo.find();
            res.status(200).json(banco);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em listas Cadastro de Banco', erro });
        }
    }
}
exports.BancoController = BancoController;
