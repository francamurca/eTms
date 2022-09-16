import { OutgoingMessage } from "http";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Pessoa } from "./pessoa";
import { Veiculo } from "./veiculo";


@Entity("proprietario_veiculo")
export class ProprietarioVeiculo{

	@PrimaryGeneratedColumn()
	id: number

	@Column({length:9})
	rntrc: string;

	@Column()
	validade_rntrc: Date

	@Column({default: true})
	ativo: boolean

	@Column({default: true})
	reter_inss: boolean

	@Column({default: true})
	reter_irpf: boolean

	@Column({length:20, nullable: false})
	nis: string

	@Column({default: 0})
	nro_dependentes: number;

	@Column({default: false})
	com_contrato: boolean

	@OneToOne(() => Pessoa, pessoa => pessoa.proprietarioVeiculo)
  @JoinColumn({
		name: "pessoa_id",
		referencedColumnName: "id"
	})
	pessoa: Pessoa

	@OneToMany(() => Veiculo, veiculos => veiculos.proprietario)
	veiculos: Veiculo[]

}