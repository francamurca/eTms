"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagPedagio = exports.TipoFavorecido = exports.TipoVinculo = exports.Sexo = exports.EstadoCivil = exports.TipoChavePix = exports.TipoConta = exports.TipoDocumentoEletrorico = exports.TipoTelefone = exports.TipoFatumemento = exports.CatPessoa = exports.TipoContribuinte = void 0;
var TipoContribuinte;
(function (TipoContribuinte) {
    TipoContribuinte[TipoContribuinte["F\u00EDsica"] = 0] = "F\u00EDsica";
    TipoContribuinte[TipoContribuinte["Jur\u00EDdica"] = 1] = "Jur\u00EDdica";
    TipoContribuinte[TipoContribuinte["Jur. Industrial"] = 2] = "Jur. Industrial";
    TipoContribuinte[TipoContribuinte["Jur. Comercial"] = 3] = "Jur. Comercial";
    TipoContribuinte[TipoContribuinte["Jur. Energia Eletr\u00EDca"] = 4] = "Jur. Energia Eletr\u00EDca";
    TipoContribuinte[TipoContribuinte["Jur. Produtor Rural"] = 5] = "Jur. Produtor Rural";
    TipoContribuinte[TipoContribuinte["Jur. Transportadora"] = 6] = "Jur. Transportadora";
    TipoContribuinte[TipoContribuinte["Isento"] = 7] = "Isento";
    TipoContribuinte[TipoContribuinte["N\u00E3o Contribuinte de ICMS"] = 8] = "N\u00E3o Contribuinte de ICMS";
})(TipoContribuinte = exports.TipoContribuinte || (exports.TipoContribuinte = {}));
var CatPessoa;
(function (CatPessoa) {
    CatPessoa["Cliente"] = "Cliente";
    CatPessoa["Fornecedor"] = "Fornecedor";
    CatPessoa["ProprietarioVeiculo"] = "Proprietario Veiculo";
    CatPessoa["Motorista"] = "Motorista";
    CatPessoa["Vendedor"] = "Vendedor";
    CatPessoa["ComissariaGargas"] = "Comissaria Gargas";
    CatPessoa["Redespachante"] = "Redespachante";
    CatPessoa["Parceiro"] = "Parceiro";
    CatPessoa["PrestadorAutonomo"] = "Prestador Autonomo";
    CatPessoa["Funcionario"] = "Funcionario";
    CatPessoa["ArmazemGeral"] = "Armazem Geral";
    CatPessoa["AgenciaMaritima"] = "Agencia Maritima";
})(CatPessoa = exports.CatPessoa || (exports.CatPessoa = {}));
var TipoFatumemento;
(function (TipoFatumemento) {
    TipoFatumemento["Diario"] = "Di\u00E1rio";
    TipoFatumemento["Dezenal"] = "Dezenal";
    TipoFatumemento["Eventual"] = "Eventual";
    TipoFatumemento["Semanal"] = "Semanal";
    TipoFatumemento["Quinsenal"] = "Quinsenal";
    TipoFatumemento["Mensal"] = "Mensal";
    TipoFatumemento["Automatico"] = "Autom\u00E1tico";
})(TipoFatumemento = exports.TipoFatumemento || (exports.TipoFatumemento = {}));
var TipoTelefone;
(function (TipoTelefone) {
    TipoTelefone["fixo"] = "Fixo";
    TipoTelefone["celular"] = "Celular";
    TipoTelefone["outros"] = "Outros";
})(TipoTelefone = exports.TipoTelefone || (exports.TipoTelefone = {}));
var TipoDocumentoEletrorico;
(function (TipoDocumentoEletrorico) {
    TipoDocumentoEletrorico["Cte"] = "Ct-e";
    TipoDocumentoEletrorico["NFe"] = "NF-e";
    TipoDocumentoEletrorico["NFSe"] = "NFS-e";
    TipoDocumentoEletrorico["MDFe"] = "MDF-e";
})(TipoDocumentoEletrorico = exports.TipoDocumentoEletrorico || (exports.TipoDocumentoEletrorico = {}));
var TipoConta;
(function (TipoConta) {
    TipoConta[TipoConta["conta corrente"] = 0] = "conta corrente";
    TipoConta[TipoConta["conta poupanca"] = 1] = "conta poupanca";
})(TipoConta = exports.TipoConta || (exports.TipoConta = {}));
var TipoChavePix;
(function (TipoChavePix) {
    TipoChavePix[TipoChavePix["cnpj"] = 0] = "cnpj";
    TipoChavePix[TipoChavePix["cpf"] = 1] = "cpf";
    TipoChavePix[TipoChavePix["email"] = 2] = "email";
    TipoChavePix[TipoChavePix["telefone"] = 3] = "telefone";
    TipoChavePix[TipoChavePix["aleat\u00F3ria"] = 4] = "aleat\u00F3ria";
})(TipoChavePix = exports.TipoChavePix || (exports.TipoChavePix = {}));
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil[EstadoCivil["Casado"] = 0] = "Casado";
    EstadoCivil[EstadoCivil["Solteiro"] = 1] = "Solteiro";
    EstadoCivil[EstadoCivil["Divorciado"] = 2] = "Divorciado";
    EstadoCivil[EstadoCivil["Viuvo"] = 3] = "Viuvo";
    EstadoCivil[EstadoCivil["Uni\u00E3o Estavel"] = 4] = "Uni\u00E3o Estavel";
    EstadoCivil[EstadoCivil["N\u00E3o Informado"] = 5] = "N\u00E3o Informado";
})(EstadoCivil = exports.EstadoCivil || (exports.EstadoCivil = {}));
var Sexo;
(function (Sexo) {
    Sexo[Sexo["Masculino"] = 0] = "Masculino";
    Sexo[Sexo["Feminino"] = 1] = "Feminino";
    Sexo[Sexo["Indefinido"] = 2] = "Indefinido";
    Sexo[Sexo["N\u00E3o Informado"] = 3] = "N\u00E3o Informado";
})(Sexo = exports.Sexo || (exports.Sexo = {}));
var TipoVinculo;
(function (TipoVinculo) {
    TipoVinculo[TipoVinculo["Agregado"] = 0] = "Agregado";
    TipoVinculo[TipoVinculo["Terceiro"] = 1] = "Terceiro";
    TipoVinculo[TipoVinculo["Frota"] = 2] = "Frota";
    TipoVinculo[TipoVinculo["Cooperativa"] = 3] = "Cooperativa";
})(TipoVinculo = exports.TipoVinculo || (exports.TipoVinculo = {}));
var TipoFavorecido;
(function (TipoFavorecido) {
    TipoFavorecido[TipoFavorecido["Propriet\u00E1rio"] = 0] = "Propriet\u00E1rio";
    TipoFavorecido[TipoFavorecido["Motorista"] = 1] = "Motorista";
})(TipoFavorecido = exports.TipoFavorecido || (exports.TipoFavorecido = {}));
var TagPedagio;
(function (TagPedagio) {
    TagPedagio[TagPedagio["Sem Parar"] = 0] = "Sem Parar";
    TagPedagio[TagPedagio["ConectCar"] = 1] = "ConectCar";
    TagPedagio[TagPedagio["C6 Taggy"] = 2] = "C6 Taggy";
    TagPedagio[TagPedagio["Veloe"] = 3] = "Veloe";
    TagPedagio[TagPedagio["Zul+"] = 4] = "Zul+";
    TagPedagio[TagPedagio["Outros"] = 5] = "Outros";
    TagPedagio[TagPedagio["N\u00E3o Informados"] = 6] = "N\u00E3o Informados";
})(TagPedagio = exports.TagPedagio || (exports.TagPedagio = {}));
