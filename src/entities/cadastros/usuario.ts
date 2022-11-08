import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, Timestamp, UpdateDateColumn } from "typeorm";
import { PermissaoAcesso } from "./permissao_acesso";
import { GrupoAcesso } from "./grupo_acesso";

@Entity("usuario")
export class Usuario{
	@PrimaryGeneratedColumn()
	id:number

  @Column({length:100, unique: true})
	email: string

	@Column({length:40, unique: true})
	login: string

	@Column({length: 50, nullable: false})
	senha: string

	@Column()
	ativo: boolean = false

	@Column()
	administrator: boolean = false

	@UpdateDateColumn()
	ultimoacesso: Timestamp

	@ManyToOne(() => GrupoAcesso, grupoAcesso => grupoAcesso.usuarios, {eager: true, cascade: true})
	@JoinColumn({
		name: "grupo_acesso_id",
		referencedColumnName:"id"		 
	})
	grupoAcesso: GrupoAcesso;

	@ManyToOne(() => PermissaoAcesso, permissaoAcesso => permissaoAcesso.usuarios, {eager: true, cascade: true})
	@JoinColumn({
		name: "permissao_acesso_id",
		referencedColumnName:"id"		 
	})
	permissaoAcesso: PermissaoAcesso;

}