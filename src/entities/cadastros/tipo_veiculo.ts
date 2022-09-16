import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Veiculo } from "./veiculo";

@Entity("tipo_veiculo")
export class TipoVeiculo{
  
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 30, unique: true})
  tipo_veiculo: string

	@OneToMany(() => Veiculo, veiculos => veiculos.tipoVeiculo)
	veiculos: Veiculo[];

}