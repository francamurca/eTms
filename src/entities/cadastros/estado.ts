import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Cidade } from "./cidade";
import { Pais } from "./pais";


@Entity("estado")

export class Estado{
	@PrimaryColumn("int4")
	id: number

	@Column({length: 2})
	UF: string

	@Column({length: 50})
	nome: string

  @ManyToMany(() => Cidade, cidades => cidades.estado)
	cidades: Cidade[]

  @ManyToOne(() => Pais, pais => pais.estados, {eager: true})
	@JoinColumn({
		name: "cod_pais",
		referencedColumnName: "id"
	})
  pais: Pais
}