 
 
 
 export enum  TipoContribuinte{
	"Física",
	"Jurídica",
	"Jur. Industrial",
	"Jur. Comercial",
	"Jur. Energia Eletríca",
	"Jur. Produtor Rural",
	"Jur. Transportadora",
	"Isento",
	"Não Contribuinte de ICMS"


}

export enum CatPessoa{
	Cliente ="Cliente",
	Fornecedor= "Fornecedor",  
	ProprietarioVeiculo = "Proprietario Veiculo", 
	Motorista = "Motorista", 
	Vendedor = "Vendedor",
	ComissariaGargas = "Comissaria Gargas", 
	Redespachante = "Redespachante", 
	Parceiro = "Parceiro", 
	PrestadorAutonomo = "Prestador Autonomo", 
	Funcionario = "Funcionario", 
  ArmazemGeral = "Armazem Geral", 
  AgenciaMaritima = "Agencia Maritima"
}
 
export enum TipoFatumemento{
	Diario = "Diário",
	Dezenal = "Dezenal", 
	Eventual = "Eventual", 
	Semanal = "Semanal", 
	Quinsenal = "Quinsenal", 
	Mensal = "Mensal", 
	Automatico = "Automático"
}

export enum TipoTelefone{
	fixo = "Fixo",
	celular = "Celular",
	outros = "Outros"
}

export enum TipoDocumentoEletrorico{
	Cte = "Ct-e",
	NFe = "NF-e",
	NFSe = "NFS-e",
	MDFe = "MDF-e",
}

export enum TipoConta{"conta corrente", "conta poupanca"}

export enum TipoChavePix{"cnpj", "cpf", "email", "telefone", "aleatória"}

export enum EstadoCivil{"Casado", "Solteiro", "Divorciado", "Viuvo", "União Estavel", "Não Informado"}

export enum Sexo{"Masculino", "Feminino", "Indefinido", "Não Informado"}

export enum TipoVinculo{"Agregado", "Terceiro", "Frota", "Cooperativa"}

export enum TipoFavorecido{"Proprietário", "Motorista"}

export enum TagPedagio{"Sem Parar", "ConectCar", "C6 Taggy", "Veloe", "Zul+", "Outros", "Não Informados"}

