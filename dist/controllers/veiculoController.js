"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VeiculoController = void 0;
const data_source_1 = require("../data-source");
const veiculo_1 = require("../entities/cadastros/veiculo");
const useRepo = data_source_1.Conn.getRepository(veiculo_1.Veiculo);
class VeiculoController {
    async create(req, res) {
        try {
            const novo = req.body;
            const veiculo = useRepo.create(novo);
            await useRepo.save(veiculo);
            res.status(201).json(veiculo);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro Criar Cadastro de Veiculo', erro });
        }
    }
    async update(req, res) {
        try {
            const newVeiculo = req.body;
            const _id = Number(req.params.id);
            let veiculo = await useRepo.findOneBy({ id: _id });
            if (veiculo.id > 0) {
                try {
                    useRepo.merge(veiculo, newVeiculo);
                    const results = await useRepo.save(veiculo);
                    res.status(202).json(results);
                }
                catch (erro) {
                    return res.status(400).send({ error: 'Erro em alterar Cadastro de Veiculos', erro });
                }
            }
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em alterar Cadastro de Veiculos', erro });
        }
    }
    async findAll(req, res) {
        try {
            const veiculo = await useRepo.find();
            res.status(200).json(veiculo);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Erro em listas Cadastro de Veiculos', erro });
        }
    }
    async findOne(req, res) {
        try {
            const idVeiculo = Number(req.params.id);
            console.log(idVeiculo);
            const veiculo = await useRepo.findOneBy({ id: idVeiculo });
            console.log(veiculo);
            res.status(200).json(veiculo);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
    async findDoc(req, res) {
        try {
            const placa = req.params.placa;
            const veiculo = await useRepo.findBy({ placa: placa });
            res.status(200).json(veiculo);
        }
        catch (erro) {
            return res.status(400).send({ error: 'Cadastro inexistente', erro });
        }
    }
}
exports.VeiculoController = VeiculoController;
