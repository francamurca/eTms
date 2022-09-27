import { Column, Entity, Index, InsertValuesMissingError, PrimaryGeneratedColumn } from "typeorm";


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

	@Column({length: 60, nullable: true})
  complemento: string

	@Column({length: 60})
	bairro: string

	@Column({length: 60})
	cidade: string

	@Column({length: 2})
	uf: string;

	@Column({length: 9})
	cep: string

	@Column()
	cod_municipio: number

	@Column()
  cod_uf: number 

	@Column({length:20, nullable: true})
  latitude: string

	@Column({length:20, nullable: true})
  longitude: string

	@Column({length: 100, nullable: true})
  website: string

	@Column({length: 100, nullable: true})
  email: string

	@Column({length: 14, nullable: true})
  telefone1: string

	@Column({length: 14, nullable: true})
  telefone2: string

	@Column({length: 3, nullable: true})
  serie_cte: string

	@Column({length: 3, nullable: true})
  serie_nfe: string

	@Column({length: 3, nullable: true})
  serie_mdfe: string

  @Column({length: 100, nullable: true})	
  hash: string;


}