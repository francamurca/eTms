import { Column, Entity, OneToMany, OneToOne, PrimaryColumn } from "typeorm";
import {Estado} from './estado'

@Entity("pais")
export class Pais{
	@PrimaryColumn("int4")
	id: number

	@Column({length: 50})
	nome_pais: string
	
	@OneToMany(() => Estado, estados => estados.pais)
  estados: Estado[]

}
/*
CREATE TABLE "TMS"."Pais" (
	id int4 NOT NULL,
	"Nome_Pais" varchar(50) NOT NULL,
	CONSTRAINT pais_pk PRIMARY KEY (id)
);

*/