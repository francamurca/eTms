import { Column, Entity, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Veiculo } from "./veiculo";
import { VeiculoModelo } from "./veiculo_modelo";

@Entity("veiculo_marca")

export class VeiculoMarca{

	@PrimaryGeneratedColumn()
  id: number

	@Column({length: 50, unique: true})
	marca: string

	@OneToOne(() => Veiculo, veiculo => veiculo.marca)
  veiculo: Veiculo

	@ManyToMany(() => VeiculoModelo)
	@JoinTable()
	modelos: VeiculoModelo[]

	
}

