import { Column, Entity,  JoinColumn,  ManyToOne,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { PermissaoAcesso } from "./permissao_acesso";
import { Usuario } from "./usuario";

@Entity("grupo_acesso")
export class GrupoAcesso{
	@PrimaryGeneratedColumn()
	id:number

  @Column({length:30, unique: true})
	descricao: string

	@OneToMany(() => Usuario, usuarios => usuarios.grupoAcesso)
	usuarios: Usuario[]

	@ManyToOne(() => PermissaoAcesso, permissaoAcesso => permissaoAcesso.grupoAcesso )
	@JoinColumn({
		name: "grupo_acesso_id",
		referencedColumnName:"id"	
	}
	)
	permissaoAcesso: PermissaoAcesso;


}