import { Column, Double, Entity, JoinColumn, ManyToOne, OneToMany,   PrimaryColumn } from "typeorm";
import { Endereco } from "./endereco";
import {Estado} from "./estado"
import { Veiculo } from "./veiculo";

@Entity("cidade")
export class Cidade {
  @PrimaryColumn("int4")
	cod_municipio: number

	@Column({length: 100})
	cidade: string

	@Column({type: "numeric", default: 0.00, nullable: true})
	al_iss: Double

	@Column({length:20, nullable: true})
	padrao_nfse: string;

	@OneToMany(() => Endereco, enderecos => enderecos.cidade)
	enederecos: Endereco[]
  
 @ManyToOne(() => Estado, estado => estado.cidades , {eager: true})
 @JoinColumn(
	{name: "cod_uf" ,
   referencedColumnName: "id",
	}
	)
 estado: Estado


@OneToMany(() => Veiculo, veiculo => veiculo.cod_municipio)
veiculos: Veiculo[]

}
/*
CREATE TABLE "TMS"."Cidade" (
	"Cod_Municipio" int4 NOT NULL,
	"Cidade" varchar(100) NOT NULL,
	"UF" bpchar(2) NOT NULL,
	"Cod_UF" int4 NULL,
	"Al_Iss" numeric(3,2) NULL,
	"EmpresaAtende" int8 NULL,
	"Pais" int4 NOT NULL,
	"Padrao_NFSe" varchar(20) NULL,
	CONSTRAINT cidade_pk PRIMARY KEY ("Cod_Municipio")
);

ALTER TABLE "TMS"."Cidade" ADD CONSTRAINT cidade_fk FOREIGN KEY ("Pais") REFERENCES "Pais"(id);

*/