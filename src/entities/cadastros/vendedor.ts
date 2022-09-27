import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Cliente } from "./cliente";

@Entity("vendedor")

export class Vendedor{

	@PrimaryGeneratedColumn()
	id: number

	@Column({type: "decimal", precision: 3, scale:2, nullable: true})
	perc_comissao: number

	@Column({nullable: true})
	validate: Date;

	@Column({length: 50})
	incluido_por: string
  
	@CreateDateColumn()
	dt_inclusao: Date

	@Column({length: 50})
	alterado_por: string

	@UpdateDateColumn()
	dt_alteracao: Date

	@OneToMany(() => Cliente, clientes => clientes.vendedor)
  clientes: Cliente[]

	


	
}