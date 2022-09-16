
import { Column, CreateDateColumn, Entity,  OneToOne, OneToMany, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn, Index } from "typeorm";
import { Cliente } from "./cliente";
import { DadosBancariosPag } from "./dados_bancarios_pag";
import { Endereco } from "./endereco";
import { Motorista } from "./motorista";
import { ProprietarioVeiculo } from "./proprietario_veiculos";
import { Telefone } from "./telefone";

import * as types from "../../common/data-types";

// export enum CatPessoa{
// 	Cliente ="Cliente",
// 	Fornecedor= "Fornecedor",  
// 	ProprietarioVeiculo = "Proprietario Veiculo", 
// 	Motorista = "Motorista", 
// 	Vendedor = "Vendedor",
// 	ComissariaGargas = "Comissaria Gargas", 
// 	Redespachante = "Redespachante", 
// 	Parceiro = "Parceiro", 
// 	PrestadorAutonomo = "Prestador Autonomo", 
// 	Funcionario = "Funcionario", 
//   ArmazemGeral = "Armazem Geral", 
//   AgenciaMaritima = "Agencia Maritima"
 
 /*
 {Cliente, Fornecedor, Proprietario Veiculo, Motorista, Vendedor, Comissaria Gargas, Redespachante, Parceiro, Prestador Autonomo, Funcionario, Armazem Geral, Agencia Maritima}
 */
 //}




@Entity("pessoa")
export class Pessoa{

	@PrimaryGeneratedColumn()
	id: number
	
	@Column()
	@Index({unique: true})
  cnpj_cpf: string;
	
	@Column({length: 100})
	razao_social: string

	@Column({length: 100, nullable: true})
	fantasia: string

	@Column({length: 20, nullable: true})
	ie_rg: string

	@Column({nullable: true})
	dt_nasc: Date

	@Column({length: 20, nullable: true})
	cod_contabil: string

	@Column({type:"bool",default: true})
	ativo: boolean;

	@CreateDateColumn()
	dt_cadastro: Timestamp;

	@Column({length: 50})
	cadastrado_por: string;

	@UpdateDateColumn()
	dt_Alteracao: Timestamp

	@Column({length: 50})
	alterador_por: string;

	@Column({length: 200, array: true})
	cat_pessoa: string;

	@Column({type:"enum", enum: types.TipoContribuinte})
	tipo_contrib: types.TipoContribuinte

	@Column({length: 100, nullable: true})
	email: string
	
	@OneToMany(() => Endereco, enderecos => enderecos.pessoa, {eager: true, cascade: true})
	enderecos: Endereco[]

	@OneToOne(() => Cliente, cliente => cliente.pessoa, {eager: true, cascade: true})
	cliente: Cliente

	@OneToMany(() => Telefone, telefones => telefones.pessoa,{eager: true, cascade: true})
  telefones: Telefone[]


	@OneToMany(() => DadosBancariosPag, dadosbancarios => dadosbancarios.pessoa, {eager: true, cascade: true})
	dadosbancarios: DadosBancariosPag[]

	@OneToOne(() => ProprietarioVeiculo, proprietarioVeiculo => proprietarioVeiculo.pessoa, {eager: true, cascade: true})
  proprietarioVeiculo: ProprietarioVeiculo 

	@OneToOne(() => Motorista, motorista => motorista.pessoa, {eager: true, cascade: true})
  motorista: Motorista 

}


