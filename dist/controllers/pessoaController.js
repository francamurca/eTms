"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
const data_source_1 = require("../data-source");
const pessoa_1 = require("../entities/cadastros/pessoa");
const useRepo = data_source_1.Conn.getRepository(pessoa_1.Pessoa);
class PessoaController {
    async create(req, res) {
        try {
            const novo = req.body;
            const pessoa = useRepo.create(novo);
            await useRepo.save(pessoa);
            res.status(201).json(pessoa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro Criar Cadastro de Pessoas', erro });
        }
    }
    async update(req, res) {
        try {
            const newPessoa = req.body;
            const _id = Number(req.params.id);
            let pessoa = await useRepo.findOneBy({ id: _id });
            if (pessoa.id > 0) {
                try {
                    useRepo.merge(pessoa, newPessoa);
                    const results = await useRepo.save(pessoa);
                    res.status(202).json(results);
                }
                catch (erro) {
                    return res.status(400).send({ error: 'Erro em alterar Cadastro de Pessoas', erro });
                }
            }
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em alterar Cadastro de Pessoas', erro });
        }
    }
    async findAll(req, res) {
        try {
            const pessoa = await useRepo.find();
            res.status(200).json(pessoa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em listas Cadastro de Pessoas', erro });
        }
    }
    async findOne(req, res) {
        try {
            const idPessoa = Number(req.params.id);
            console.log(idPessoa);
            const pessoa = await useRepo.findOneBy({ id: idPessoa });
            console.log(pessoa);
            res.status(200).json(pessoa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
    async findDoc(req, res) {
        try {
            const doc = req.params.doc;
            const pessoa = await useRepo.findBy({ cnpj_cpf: doc });
            res.status(200).json(pessoa);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
}
exports.PessoaController = PessoaController;
