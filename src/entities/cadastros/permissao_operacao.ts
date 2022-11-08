import { Column, Entity,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";

@Entity("pemissao_operacao")
export class PermissaoOperacao{
	@PrimaryGeneratedColumn()
	id:number

  @Column({length:30, unique: true})
	descricao: string


}