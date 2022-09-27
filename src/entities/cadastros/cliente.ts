import {  Column, CreateDateColumn, Double, Entity,  JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { Pessoa } from "./pessoa";
import { Vendedor } from "./vendedor";

import * as type from "../../common/data-types"



@Entity("cliente")
export class Cliente{
  
	@PrimaryGeneratedColumn()
	id: bigint

	@Column({length: 14})
	cnpj_pag: string

	@Column()
	dt_mov: Date

	@Column({default: false, nullable: true})
	inadimplente: boolean

	@Column({default: false, nullable: true})
	calc_frt_maior: boolean

	@Column({default: false, nullable: true})
	cobrar_icms: boolean

	@Column({default: false, nullable: true})
	reter_iss: boolean

	@Column({default: false, nullable: true})
	insentar_rctrc: boolean

	@Column({default: false, nullable: true})
	resp_seguro: boolean

	@Column({length:14, nullable: true})
	cnpj_seguradora: string

	@Column({length:100, nullable: true})
  nome_seguradora: string

	@Column({length:30, nullable: true})
	nr_apolice: string

	@Column({length:30, nullable: true})
	nr_averbacao: string

	@Column({type: "numeric", default: 0.00, nullable: true})
	max_assegurado: Double

	@Column({nullable: true})
	dt_vencimento_ddr: Date

	@Column({type: "enum", enum: type.TipoFatumemento, default: type.TipoFatumemento.Eventual, nullable: true})
	tipo_faturamento: type.TipoFatumemento

	@Column({type: "bigint", nullable: true})
	redespachante_id: number

	@Column({type: "bigint", nullable: true})
	vendedor_id: number

	@CreateDateColumn()
	dt_cadastro: Timestamp;

	@Column({length: 50, nullable: false})
	cadastrado_por: string;

	@UpdateDateColumn()
	dt_Alteracao: Timestamp

	@Column({length: 50, nullable: false})
	alterador_por: string;

	@OneToOne(() => Pessoa, pessoa => pessoa.cliente)
  @JoinColumn({
		name: "pessoa_id",
		referencedColumnName: "id"
	})
	pessoa: Pessoa	

	// @OneToOne(() => Pessoa, pessoa => pessoa.redespachante)
  // @JoinColumn({
	// 	name: "redespachante_id",
	// 	referencedColumnName: "id"
	//  })
	 redespachante: Pessoa

	@ManyToOne(() => Vendedor, vendedor => vendedor.clientes, {eager: true})
	@JoinColumn({
		name: "vendedor_id",
		referencedColumnName: "id"	
	})
	vendedor: Vendedor



}
/*
CREATE TABLE "Cliente" (
	"Id" bigserial NOT NULL,
	"Id_Pessoa" int8 NOT NULL,
	"Cnpj_Pag" varchar(14) NOT NULL,
	"Dt_mov" date NULL,
	"Ativo" bool NULL,
	"Inadimplente" bool NULL,
	"Calc_Frt_maior" bool NULL,
	"Cob_Icms" bool NULL,
	"Reter_Iss" bool NULL,
	"Seg_Proprio" bool NULL,
	"Cnpj_Seg" varchar(14) NULL,
	"Razao_Social_Seg" varchar(100) NULL,
	"Nr_Apolice" varchar(30) NULL,
	"Nr_Averbacao" varchar(30) NULL,
	"Dt_Vencimento_DDR" date NULL,
	"Isentar_RCTRC" bool NULL,
	"Vlr_Max_Asegurado" numeric(15,2) NULL,
	"Tipo_Faturamento" "TMS".tipo_faturamento NULL,
	"Redespachante" int8 NULL,
	"Vendedor" int8 NULL,
	CONSTRAINT cliente_pk PRIMARY KEY ("Id")
);
CREATE UNIQUE INDEX cliente_cnpj_pag_idx ON "TMS"."Cliente" USING btree ("Cnpj_Pag", "Id_Pessoa");

ALTER TABLE "TMS"."Cliente" ADD CONSTRAINT cliente_fk FOREIGN KEY ("Id_Pessoa") REFERENCES "Pessoa"(id);

*/