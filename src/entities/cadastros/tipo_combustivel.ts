import { Column, Entity,  OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Veiculo } from "./veiculo";

@Entity("tipo_combustivel")
export class TipoCombustivel{

	@PrimaryGeneratedColumn()
	id: number

	@Column({length:30, unique: true})
	combustivel: string

	@OneToMany(() => Veiculo, veiculos => veiculos.tipoCombustivel)
	veiculos: Veiculo[]


}
