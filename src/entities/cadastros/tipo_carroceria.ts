import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Veiculo } from "./veiculo";

@Entity("tipo_carroceria")
export class TipoCarroceria{
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 30, unique: true})
	carroceria: string

	@OneToMany(() => Veiculo, veiculos => veiculos.tipoCarroceria)
	veiculos: Veiculo[]
}