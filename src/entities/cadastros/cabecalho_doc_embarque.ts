import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cabecalho_doc_embarque")

export class CabecalhoDocEmbaque{
	@PrimaryGeneratedColumn()
	id: number

	
}