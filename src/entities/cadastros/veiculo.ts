import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cidade } from "./cidade";
import { ProprietarioVeiculo } from "./proprietario_veiculos";
import { TipoCarroceria } from "./tipo_carroceria";
import { TipoCombustivel } from "./tipo_combustivel";
import { TipoVeiculo } from "./tipo_veiculo";
import { VeiculoMarca } from "./veiculo_marca";
import { VeiculoModelo } from "./veiculo_modelo";

import * as type from "../../common/data-types"



@Entity("veiculo")
export class Veiculo{
@PrimaryGeneratedColumn()
id: number

@Column({length:9, unique: true})
placa: string

@ManyToOne(() => TipoVeiculo, tipoVeiculo => tipoVeiculo.veiculos,{eager: true,})
@JoinColumn({
	name: "tipo_veiculo_id",
	referencedColumnName: "id"

})
tipoVeiculo: TipoVeiculo

@ManyToOne(() => TipoCombustivel, tipoCombustivel => tipoCombustivel.veiculos,{eager: true,})
@JoinColumn({
	name: "tipo_combustivel_id",
	referencedColumnName: "id"

})
tipoCombustivel: TipoCombustivel

@Column({nullable: true})
qtd_eixos: number


@OneToOne(() => VeiculoMarca, marca => marca.veiculo,{eager: true})
@JoinColumn({
	name: "veiculo_marca_id",
	referencedColumnName: "id"
})
marca: VeiculoMarca

@OneToOne(() => VeiculoModelo, modelo => modelo.veiculo,{eager: true})
@JoinColumn({
	name: "veiculo_modelo_id",
	referencedColumnName: "id"
})
modelo: VeiculoModelo

@Column()
ano_fabricacao: number

@OneToOne(() => Cidade, cidade => cidade.veiculos, {eager: true})
@JoinColumn({
	name: "cod_municipio",
	referencedColumnName: "cod_municipio"
})
cod_municipio: number

@Column({type: "enum", enum: type.TipoVinculo})
vinculo: type.TipoVinculo

@Column({type: "enum", enum: type.TipoFavorecido})
favorecido: type.TipoFavorecido

@Column({length: 100, nullable: true})
categoria_pedagio: string

@Column({length:20, nullable: true})
cor_cabine: string

@Column({length:20, nullable: true})
cor_carroceria: string

@ManyToOne(() => TipoCarroceria, tipoCarroceria => tipoCarroceria.veiculos)
@JoinColumn({
	name: "tipo_carroceria_id",
	referencedColumnName: "id"
})
tipoCarroceria: TipoCarroceria

@Column({nullable: true})
seg_validade: Date

@Column({length: 20, nullable: true})
cod_sm: string

@Column({length: 30, nullable: true})
chassis: string

@Column({length: 30, nullable: true})
numero_motor: string

@Column({length: 30, nullable: true})
certificado: string

@Column({length: 30, nullable: true})
renavam: string

@Column({type: "decimal", precision: 10, scale:3, nullable: true})
odometro: number

@Column({nullable: true})
data_licenciamento: Date

@Column({nullable: true})
apolice_vencimento: Date

@Column({length: 20, nullable: true})
apolice_seguro: string

@Column({type: "enum", enum: type.TagPedagio, default: type.TagPedagio["Não Informados"]})
tag_pedagio: type.TagPedagio 

@ManyToOne(() => ProprietarioVeiculo, propietario => propietario.veiculos)
@JoinColumn({
	name: "proprietario_veiculo_id",
	referencedColumnName: "id"
})
proprietario: ProprietarioVeiculo
}