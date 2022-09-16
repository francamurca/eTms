import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Endereco } from "./endereco";


@Entity("tipo_endereco")

export class Tipo_Endereco{
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50})
	tipo: string

	@OneToMany(() => Endereco, enderecos => enderecos.tipoEndereco)
	enderecos: Endereco[]
}