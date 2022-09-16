import {  Column, Entity, JoinColumn, JoinTable, ManyToMany,  ManyToOne,  PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Pessoa } from "./pessoa";

import * as type from "../../common/data-types"


@Entity("telefone")
export class Telefone{
	@PrimaryGeneratedColumn()
	id: BigInt

  @Column({type:"enum", enum: type.TipoTelefone, default: type.TipoTelefone.fixo})
	tipo: type.TipoTelefone
	
  @Column({length:2})
	ddd: string

	@Column({length: 20})
  numero: string

	@Column({length:60, nullable: true})
	contato: string

	@ManyToOne(() => Pessoa, pessoa => pessoa.telefones)
	@JoinColumn({
		name: "pessoa_id",
		referencedColumnName: "id"
	})
	pessoa: Pessoa

	

	}

