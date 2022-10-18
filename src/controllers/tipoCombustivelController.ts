import { Request, Response } from "express";
import { Conn } from "../data-source";
import { TipoCombustivel } from "../entities/cadastros/tipo_combustivel"

const useRepo = Conn.getRepository(TipoCombustivel); 


export class TipoCombustivelController{


	async create(req: Request, res: Response) {
    try {
			const novo = req.body; 
			console.log(novo)
		  const tipoCombustivel = useRepo.create(novo);
			await useRepo.save(tipoCombustivel);
			res.status(201).json(tipoCombustivel);

		} catch (erro) {
			return res.status(400).send({ error: 'Erro Criar Cadastro de Tipo de Combustivel', erro })
		} 
 }

 async update(req: Request, res: Response) {
	try {
		
		const newTipoCombustivel = req.body; 
		const _id = Number( req.params.id );

		let tipoCombustivel: any = await useRepo.findOneBy({id:_id}) ;
    if(tipoCombustivel.id > 0){
			try {
				useRepo.merge(tipoCombustivel, newTipoCombustivel);
				const results = await useRepo.save(tipoCombustivel);
				res.status(202).json(results);
			} catch (erro) {
				return res.status(400).send({ error: 'Erro em alterar Cadastro de Tipo de Combustivel', erro })
			}
		}
		

	} catch (erro) {
		return res.status(400).send({ error: 'Erro em alterar Cadastro de Pessoas', erro })
	} 
}

 async findAll (req: Request, res: Response) {
	try {
		const tipoCombustivel = await useRepo.find()
		res.status(200).json(tipoCombustivel)
	} catch (erro) {
		return res.status(400).send({ error: 'Erro em listas Cadastro de Tipo de Combustivel', erro })
	}

 }

 async findOne (req: Request, res: Response) {
	try {
		const  _id  =  Number( req.params.id );
		console.log(_id);
		const pessoa = await useRepo.findOneBy({id:_id});
    console.log(pessoa);
		res.status(200).json(pessoa)
	} catch (erro) {
		return res.status(400).send({ error: 'Cadastro inexistente', erro })
	}

 }
}

