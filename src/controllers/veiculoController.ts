import { Request, Response } from "express";
import { Conn } from "../data-source";
import { Veiculo } from "../entities/cadastros/veiculo"

const useRepo = Conn.getRepository(Veiculo); 


export class VeiculoController{


	async create(req: Request, res: Response) {
    try {
			const novo = req.body; 
			
		  const veiculo = useRepo.create(novo);
			await useRepo.save(veiculo);
			res.status(201).json(veiculo);

		} catch (erro) {
			return res.status(400).send({ error: 'Erro Criar Cadastro de Veiculo', erro })
		} 
 }

 async update(req: Request, res: Response) {
	try {
		
		const newVeiculo = req.body; 
		const _id = Number( req.params.id );

		let veiculo: any = await useRepo.findOneBy({id:_id}) ;
    if(veiculo.id > 0){
			try {
				useRepo.merge(veiculo, newVeiculo);
				const results = await useRepo.save(veiculo);
				res.status(202).json(results);
			} catch (erro) {
				return res.status(400).send({ error: 'Erro em alterar Cadastro de Veiculos', erro })
			}
		}
		

	} catch (erro) {
		return res.status(400).send({ error: 'Erro em alterar Cadastro de Veiculos', erro })
	} 
}

 async findAll (req: Request, res: Response) {
	try {
		const veiculo = await useRepo.find()
		res.status(200).json(veiculo)
	} catch (erro) {
		return res.status(400).send({ error: 'Erro em listas Cadastro de Veiculos', erro })
	}

 }

 async findOne (req: Request, res: Response) {
	try {
		const  idVeiculo  =  Number( req.params.id );
		console.log(idVeiculo);
		const veiculo = await useRepo.findOneBy({id:idVeiculo});
    console.log(veiculo);
		res.status(200).json(veiculo)
	} catch (erro) {
		return res.status(400).send({ error: 'Cadastro inexistente', erro })
	}

 }

 async findDoc (req: Request, res: Response) {
	try {

		const  placa  =  req.params.placa;
		const veiculo = await useRepo.findBy({placa: placa});

		res.status(200).json(veiculo)
	} catch (erro) {
		return res.status(400).send({ error: 'Cadastro inexistente', erro })
	}

 }
}

