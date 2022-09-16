import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa";
import * as type from "../../common/data-types";

@Entity("motorista")
export class Motorista{
  @PrimaryGeneratedColumn()
	id: number

	@Column({type: "enum", enum: type.EstadoCivil, default: type.EstadoCivil["Não Informado"]})
	estado_civil: type.EstadoCivil
  
	@Column({length: 20 , unique: true})
	cnh_numero: string

	@Column({length: 3})
	cnh_categoria: string

	@Column({length: 20, nullable: true})
	cnh_registro: string

	@Column({length: 2, nullable: true})
	cnh_uf: string

  @Column({nullable: true})
	cnh_emissao: Date

	@Column({nullable: true})
	cnh_validade: Date

	@Column({nullable: true})
	cnh_data_primeira: Date

	@Column({length: 20, nullable: true})
	cnh_codigo_seguranca: string

	@Column({nullable:true})
	exame_toxilogico_validade: Date

	@Column({length: 20, nullable: true})
	seg_cartao: string

	@Column({length: 20, nullable: true})
	seg_liberacao: string

	@Column({nullable: true})
	seg_liberacao_validade: Date

	@Column({type: "decimal", precision: 15, scale:2, nullable: true})
	seg_valor_assegurado: number

	@Column({length: 20, nullable: true})
	seg_codido_sm: string

	@Column({length: 50, nullable: true})
	carac_barba: string

  @Column({length: 50, nullable: true})
	carac_cabelo: string

	@Column({length: 50, nullable: true})
	carac_pelo: string

	@Column({length: 10, nullable: true})
	carac_olhos: string

  @Column({type: "enum", enum: type.Sexo, default: type.Sexo["Não Informado"]})
	carac_sexo: type.Sexo

	@Column({length: 50, nullable: true})
	carac_sinais: string

	@Column({length: 50, nullable: true})
	carac_tatuagens: string

	@Column({length: 2, nullable: true})
	carac_tipo_sanguineo: string

	@Column({type: "decimal", precision: 3, scale:2, nullable: true})
	carac_altura: number

	@Column({type: "decimal", precision: 3, scale:2, nullable: true})
	carac_peso: number

	@Column({length: 20, nullable: true})
	ciot_cartao: string

	@Column({length: 20, nullable: true})
	ciot_cartao_pedagio: string

	@Column({length: 20, nullable: true})
	perc_comissao: string

	@Column({length: 20, nullable: true})
	empresa_respostavel: string;

	@OneToOne(() => Pessoa, pessoa => pessoa.motorista)
  @JoinColumn({
		name: "pessoa_id",
		referencedColumnName: "id"
	})
	pessoa: Pessoa

}