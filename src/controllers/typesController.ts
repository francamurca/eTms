import { Request, Response,  } from "express";

import * as types from "../common/data-types";

export class DataTypes{


	 dataTypes(req: Request, res: Response){
    try {
			const tipo = String(req.params.datatype);
			const itens = [];
      let dataType

			switch (tipo){
				case "TipoContibuinte":
			    dataType = types.TipoContribuinte
					break
				case "CatPessoa":
					dataType = types.CatPessoa
					break
				case "TipoFatumemento":
				  dataType = types.TipoFatumemento
          break
				case "EstadoCivil":
					dataType = types.EstadoCivil
					break
				case "Sexo":
					dataType = types.Sexo
					break
				case "TagPedagio":
					dataType = types.TagPedagio
					break 
        case "TipoChavePix":
					dataType = types.TipoChavePix
					break
        case "TipoConta":
					dataType = types.TipoConta
					break	
				case "TipoDocumentoEletrorico":
					dataType = types.TipoDocumentoEletrorico
					break
				case "TipoFavorecido":
					dataType = types.TipoFavorecido
				  break
				case "TipoVinculo":
					dataType = types.TipoVinculo
				  break
				case "TipoTelefone":
					dataType = types.TipoTelefone	
					break	
        
				//sempre no final
				default: dataType = undefined		
				         
			}
      
			if (dataType == undefined){
		  	 res.status(400).json({erro:"Data type não encontrado!"})
			}else{
		  	for (let type in dataType) {
		  		if (dataType.hasOwnProperty(type) &&
			  			(isNaN(parseInt(type)))) {
		  				itens.push(type)
			  	}
				}
				res.status(200).json({enum: tipo,itens})
			}			
		} catch (error) {
			  res.status(400).json({erro:"Data type não encontrado!", error})
			
		}
	}
}