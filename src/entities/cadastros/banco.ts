import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { DadosBancariosPag } from "./dados_bancarios_pag";

@Entity("banco")
export class Banco{
	@PrimaryGeneratedColumn()
	id:number

	@Column({length:3, unique: true})
	banco: string

	@Column({length: 50})
	nome: string

	@OneToMany(() => DadosBancariosPag, dadosbancarios => dadosbancarios.banco)
	dadosbancarios: Banco

}