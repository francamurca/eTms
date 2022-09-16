import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco";

@Entity("empresa")
@Index(["cnpj", "unidade"], {unique: true})

export class Empresa{

	@PrimaryGeneratedColumn()
	id: number

	@Column({length:14})
	cnpj: string

	@Column({length: 3})
	unidade: string

	@Column({type: "bool", default: true})
  ativo: boolean

	@Column({length:20, nullable: true})
  insc_estadual: string

  @Column({length: 100})
	logradouro: string

	@Column({length:20})
  numero: string


}