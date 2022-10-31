import { Column, Entity,  OneToMany,  PrimaryGeneratedColumn } from "typeorm";
import { GrupoAcesso } from "./grupo_acesso";
import { Usuario } from "./usuario";


@Entity("permissao_acesso")
export class PermissaoAcesso{
	@PrimaryGeneratedColumn()
	id:number

	@Column()
	ativo: boolean = false

	@OneToMany(() => Usuario, usuarios => usuarios.permissaoAcesso)
	usuarios : Usuario[]


	@OneToMany(() => GrupoAcesso, grupoAcesso => grupoAcesso.permissaoAcesso)
	grupoAcesso : GrupoAcesso[]

}