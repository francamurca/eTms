"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpresaController = void 0;
const data_source_1 = require("../data-source");
const empresa_1 = require("../entities/cadastros/empresa");
const useRepo = data_source_1.Conn.getRepository(empresa_1.Empresa);
class EmpresaController {
    async update(req, res) {
        try {
            const newEmpresa = req.body;
            const _id = Number(req.params.id);
            let empresa = await useRepo.findOneBy({ id: _id });
            if (empresa.id > 0) {
                try {
                    useRepo.merge(empresa, newEmpresa);
                    const results = await useRepo.save(empresa);
                    res.status(202).json(results);
                }
                catch (erro) {
                    return res.status(400).send({ error: 'Erro em alterar Cadastro de Empresa', erro });
                }
            }
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em alterar Cadastro de Empresa', erro });
        }
    }
    async create(req, res) {
        try {
            const novo = req.body;
            const empresa = useRepo.create(novo);
            await useRepo.save(empresa);
            res.status(201).json(empresa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro Criar Cadastro de Empresa', erro });
        }
    }
    async findOne(req, res) {
        try {
            const sigla = req.params.unidade;
            const empresa = await useRepo.findOneBy({ unidade: sigla });
            res.status(200).json(empresa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
    async findAll(req, res) {
        try {
            const empresa = await useRepo.find();
            res.status(200).json(empresa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em listas Cadastro de Empresa', erro });
        }
    }
}
exports.EmpresaController = EmpresaController;
