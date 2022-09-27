import { Column, Entity, JoinColumn, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./cidade";
import {Pessoa} from "./pessoa"
import { Tipo_Endereco } from "./tipo_endereco";

@Entity("endereco")
export class Endereco{
  @PrimaryGeneratedColumn()
	id: BigInt

	// @Column("bigint")
	// pessoa_id: number
	@Column({length: 100, nullable: true})
	logradouro: string

	@Column({length: 20, nullable: true})
	numero: string

	@Column({length: 50, nullable: true})
  complemento: string

	@Column({length: 60, nullable: true})
  bairro: string

	@Column({length: 8, nullable: true })
	cep: string

	@Column({length: 20, nullable: true})
	latitude: string
	
	@Column({length: 20, nullable: true})
	longitude: string
  
	@ManyToOne(() => Cidade, cidade => cidade.enederecos, {eager: true, cascade: true})
	@JoinColumn({
		name: "cod_municipio",
		referencedColumnName:"cod_municipio"		 
	})
	cidade: Cidade

	@ManyToOne(() => Pessoa, pessoa => pessoa.enderecos, {onUpdate:'CASCADE'})
	@JoinColumn({
		name: "pessoa_id",
		referencedColumnName:"id"		 
	})
  pessoa: Pessoa

	@ManyToOne(() => Tipo_Endereco, tipoEndereco => tipoEndereco.enderecos, {onUpdate:'CASCADE'})
	@JoinColumn({
		name: "tipo_endereco",
		referencedColumnName: "id"
	})
	tipoEndereco: Tipo_Endereco


}	

