import { Request, Response } from "express";
import { Conn } from "../data-source";
import { Empresa } from "../entities/cadastros/empresa";

const useRepo = Conn.getRepository(Empresa);

export class EmpresaController{
	
	
	async update(req: Request, res: Response) {
		try {
			
			const newEmpresa = req.body; 
			const _id = Number( req.params.id );
	
			let empresa: any = await useRepo.findOneBy({id:_id}) ;
			if(empresa.id > 0){
				try {
					useRepo.merge(empresa, newEmpresa);
					const results = await useRepo.save(empresa);
					res.status(202).json(results);
				} catch (erro) {
					return res.status(400).send({ error: 'Erro em alterar Cadastro de Empresa', erro })
				}
			}
			
	
		} catch (erro) {
			return res.status(400).send({ error: 'Erro em alterar Cadastro de Empresa', erro })
		} 
	}
	async create(req: Request, res: Response) {
    try {
			const novo = req.body; 
			
		  const empresa = useRepo.create(novo);
			await useRepo.save(empresa);
			res.status(201).json(empresa);

		} catch (erro) {
			return res.status(400).send({ error: 'Erro Criar Cadastro de Empresa', erro })
		} 
	}

	async findOne (req: Request, res: Response) {
		try {
			const  sigla  =  req.params.unidade;
			const empresa = await useRepo.findOneBy({unidade:sigla});

			res.status(200).json(empresa)
		} catch (erro) {
			return res.status(400).send({ error: 'Cadastro inexistente', erro })
		}
	}

	async findAll (req: Request, res: Response) {
  	try {
	  	const empresa = await useRepo.find()
	  	res.status(200).json(empresa)
	  } catch (erro) {
	  	return res.status(400).send({ error: 'Erro em listas Cadastro de Empresa', erro })
		}
	}

}
