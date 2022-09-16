import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Banco } from "./banco";
import { Pessoa } from "./pessoa";
import * as type from "../../common/data-types";

@Entity("dados_bancarios_pag")

export class DadosBancariosPag{
	@PrimaryGeneratedColumn()
	id: number

	@Column({type: "enum", enum: type.TipoConta, default: type.TipoConta["conta corrente"]})
	tipo_conta: type.TipoConta

	@Column({length: 10})
	agencia_numero: string

	@Column({length: 1})
	agencia_digito: string

	@Column({length: 20})
	conta_numero: string

	@Column({length: 1})
  conta_digito: string

  @Column({type: "enum", enum: type.TipoChavePix, nullable: true})
  tipo_chave_pix: type.TipoChavePix

	@Column({length: 100, nullable: true})
	chave_pix: string
	
	@ManyToOne(() => Banco, banco => banco.dadosbancarios,  {eager: true})
  @JoinColumn({
		name: "banco_id",
		referencedColumnName: "id"
	})
	banco: Banco

	@ManyToOne(() => Pessoa, pessoa => pessoa.dadosbancarios)
	@JoinColumn({
		name: "pessoa_id",
		referencedColumnName: "id"
	})
	pessoa: Pessoa




}