import { Request, Response } from "express";
import { Conn } from "../data-source";
import { Banco } from "../entities/cadastros/banco";

const useRepo = Conn.getRepository(Banco);

export class BancoController{
	
	
	async update(req: Request, res: Response) {
		try {
			
			const newBanco = req.body; 
			const _id = Number( req.params.id );
	
			let banco: any = await useRepo.findOneBy({id:_id}) ;
			if(banco.id > 0){
				try {
					useRepo.merge(banco, newBanco);
					const results = await useRepo.save(banco);
					res.status(202).json(results);
				} catch (erro) {
					return res.status(400).send({ error: 'Erro em alterar Cadastro de Banco', erro })
				}
			}
			
	
		} catch (erro) {
			return res.status(400).send({ error: 'Erro em alterar Cadastro de Banco', erro })
		} 
	}
	async create(req: Request, res: Response) {
    try {
			const novo = req.body; 
			
		  const banco = useRepo.create(novo);
			await useRepo.save(banco);
			res.status(201).json(banco);

		} catch (erro) {
			return res.status(400).send({ error: 'Erro Criar Cadastro de Banco', erro })
		} 
	}

	async findOne (req: Request, res: Response) {
		try {
			const  _id  =  Number( req.params.id );
			const banco = await useRepo.findOneBy({id:_id});

			res.status(200).json(banco)
		} catch (erro) {
			return res.status(400).send({ error: 'Cadastro inexistente', erro })
		}
	}

	async findAll (req: Request, res: Response) {
  	try {
	  	const banco = await useRepo.find()
	  	res.status(200).json(banco)
	  } catch (erro) {
	  	return res.status(400).send({ error: 'Erro em listas Cadastro de Banco', erro })
		}
	}

}
