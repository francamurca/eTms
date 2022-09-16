import { Column, Entity,  OneToOne,  PrimaryGeneratedColumn } from "typeorm";
import { Veiculo } from "./veiculo";


@Entity("veiculo_modelo")

export class VeiculoModelo{

	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, unique: true})
  modelo: string

	@OneToOne(() => Veiculo, veiculo => veiculo.modelo)
	veiculo: Veiculo;

}