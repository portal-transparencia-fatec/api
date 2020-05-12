'use strict'
const { sequelize } = require('../../app/models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return sequelize.transaction(async transaction => {
      const usuariosInsert = await sequelize.models.Usuario.bulkCreate([
        {
          nome: 'ADELSON FLAVIO DE SOUZA',
          username: 'adelson.souza',
          ativo: true
        },
        {
          nome: 'ADILSON BHERING CHAGAS',
          username: 'adilson.chagas',
          ativo: true
        },
        {
          nome: 'ADIR SANTOS JUNIOR',
          username: 'adir.santos',
          ativo: true
        },
        {
          nome: 'ADRIANO LUIS TONETTI',
          username: 'adriano.tonetti',
          ativo: true
        },
        {
          nome: 'ADRIANO XAVIER SILVA',
          username: 'adriano.silva',
          ativo: true
        },
        {
          nome: 'ALEX SANDRO VEIGA DAS NEVES',
          username: 'alex.neves',
          ativo: true
        },
        {
          nome: 'ALEXADRE CARDOSO DE SOUZA',
          username: 'alexandre.souza',
          ativo: true
        },
        {
          nome: 'ALEXANDRE RAUEN ABAGE',
          username: 'alexandre.abage',
          ativo: true
        },
        {
          nome: 'AMANDA FLORES MAFRA',
          username: 'amanda.mafra',
          ativo: true
        },
        {
          nome: 'ANDERSON DE FREITAS',
          username: 'anderson.freitas',
          ativo: true
        },
        {
          nome: 'ANDRE ROBSON APARECIDO VERA CRUZ',
          username: 'andre.cruz',
          ativo: true
        },
        {
          nome: 'ANDREA BARBETTI DE GRABALOS',
          username: 'andrea.grabalos',
          ativo: true
        },
        {
          nome: 'ANDREIA APARECIDA TOBIAS',
          username: 'andreia.tobias',
          ativo: true
        },
        {
          nome: 'ATEILDO ALVES DE LIMA',
          username: 'ateildo.lima',
          ativo: true
        },
        {
          nome: 'BENICIO DIAS',
          username: 'benicio.dias',
          ativo: true
        },
        {
          nome: 'BIANCA APARECIDA REALE',
          username: 'bianca.reale',
          ativo: true
        },
        {
          nome: 'BRENNA SOUZA MATOS',
          username: 'brenna.matos',
          ativo: true
        },
        {
          nome: 'CARLOS ALEXANDRE RODRIGUES',
          username: 'carlos.rodrigues',
          ativo: true
        },
        {
          nome: 'CARLOS RODRIGO FERREIRA',
          username: 'carlos.ferreira',
          ativo: true
        },
        {
          nome: 'CESAR HENRIQUE DE ASSIS',
          username: 'cesar.assis',
          ativo: true
        },
        {
          nome: 'CLAUDINEI PIRELLI',
          username: 'claudinei.pirelli',
          ativo: true
        },
        {
          nome: 'COSTABILE BRONZO',
          username: 'costabile.bronzo',
          ativo: true
        },
        {
          nome: 'DAIANI DA SILVA',
          username: 'daiani.silva',
          ativo: true
        },
        {
          nome: 'DANIEL DOS SANTOS',
          username: 'daniel.santos',
          ativo: true
        },
        {
          nome: 'DANILO DE CAMPOS',
          username: 'danilo.campos',
          ativo: true
        },
        {
          nome: 'DANILO LEDO PRIMO',
          username: 'danilo.primo',
          ativo: true
        },
        {
          nome: 'DENILSON MENDES FONSECA',
          username: 'denilson.fonseca',
          ativo: true
        },
        {
          nome: 'DIEFERSON ROBERTO DA SILVA',
          username: 'dieferson.silva',
          ativo: true
        },
        {
          nome: 'DOUGLAS DE OLIVEIRA',
          username: 'douglas.oliveira',
          ativo: true
        },
        {
          nome: 'EDUARDO BARBOSA VIEIRA',
          username: 'eduardo.vieira',
          ativo: true
        },
        {
          nome: 'EDUARDO FABIO IWAMOTO',
          username: 'eduardo.iwamoto',
          ativo: true
        },
        {
          nome: 'ELIANE TANUCI BARROS',
          username: 'eliane.barros',
          ativo: true
        },
        {
          nome: 'FABIO CESAR ASSIS',
          username: 'fabio.assis',
          ativo: true
        },
        {
          nome: 'FERNANDO PASQUALINI',
          username: 'fernando.pasqualini',
          ativo: true
        },
        {
          nome: 'FERNANDO ZILIOTTO',
          username: 'fernando.ziliotto',
          ativo: true
        },
        {
          nome: 'FRANCISCO DAS CHAGAS ALVES DE REZENDE',
          username: 'francisco.rezende',
          ativo: true
        },
        {
          nome: 'FRANCISCO GLADSTON DE FRANÇA',
          username: 'francisco.silva',
          ativo: true
        },
        {
          nome: 'FRANCISO CEZIVAN DE FREITAS OLIVEIRA',
          username: 'francisco.oliveira',
          ativo: true
        },
        {
          nome: 'GABRIEL CARMINHOTTO ANGELINI RODRIGUE',
          username: 'gabriel.carminhotto',
          ativo: true
        },
        {
          nome: 'GABRIEL CASSEMIRO OLHIER',
          username: 'gabriel.olhier',
          ativo: true
        },
        {
          nome: 'GELSON SANTOS',
          username: 'gelson.santos',
          ativo: true
        },
        {
          nome: 'GILMAR GONÇALVES DOS SANTOS',
          username: 'gilmar.santos',
          ativo: true
        },
        {
          nome: 'GIOVANA ELIZA SILVA',
          username: 'giovana.silva',
          ativo: true
        },
        {
          nome: 'IVAN MOLLER BORGES',
          username: 'ivan.borges',
          ativo: true
        },
        {
          nome: 'IVANIR VENCESLAU BALBINO',
          username: 'ivanir.balbino',
          ativo: true
        },
        {
          nome: 'IVENS PANTALEAO',
          username: 'ivens.pantaleao',
          ativo: true
        },
        {
          nome: 'JAILSON CUBINES',
          username: 'jailson.cubines',
          ativo: true
        },
        {
          nome: 'JAMILES CRISTINA MARQUES',
          username: 'jamiles.marques',
          ativo: true
        },
        {
          nome: 'JANAINA FELICIANO VICENCIO MATIAS',
          username: 'janaina.matias',
          ativo: true
        },
        {
          nome: 'JAQUELINE GONCALVES DA SILVA',
          username: 'jaqueline.silva',
          ativo: true
        },
        {
          nome: 'JEDIELSON CASTOR ARCENO',
          username: 'jedielson.arceno',
          ativo: true
        },
        {
          nome: 'JESSICA FONSECA FAVORETTO',
          username: 'jessica.favoretto',
          ativo: true
        },
        {
          nome: 'JONATHAN BARROS DOS SANTOS',
          username: 'jonathan.santos',
          ativo: true
        },
        {
          nome: 'JORGE BRAZ DE SOUZA JUNIOR',
          username: 'jorge.souza',
          ativo: true
        },
        {
          nome: 'JOSE ARNALDO AUGUSTO',
          username: 'jose.augusto',
          ativo: true
        },
        {
          nome: 'JOSE CARLOS SANTOS',
          username: 'jose.santos',
          ativo: true
        },
        {
          nome: 'JOSE CESAR DE ASSIS',
          username: 'jose.assis',
          ativo: true
        },
        {
          nome: 'JOSE DAMIAO CIPRIANO',
          username: 'jose.cipriano',
          ativo: true
        },
        {
          nome: 'JOSE FLAVIO COELHO',
          username: 'jose.coelho',
          ativo: true
        },
        {
          nome: 'JOSE LUIS RAMALHEIRA',
          username: 'jose.ramalheira',
          ativo: true
        },
        {
          nome: 'JOSE RENATO MARTINS',
          username: 'jose.martins',
          ativo: true
        },
        {
          nome: 'JOSE ROBERTO ROCHA PEREIRA',
          username: 'jose.pereira',
          ativo: true
        },
        {
          nome: 'JOSE RODOLFO LIMA DA SILVA',
          username: 'jose.silva',
          ativo: true
        },
        {
          nome: 'JOSIANE FERREIRA DE AZEVEDO',
          username: 'josiane.azevedo',
          ativo: true
        },
        {
          nome: 'JULIANA MOREIRA MARTINS',
          username: 'juliana.martins',
          ativo: true
        },
        {
          nome: 'JULIANA SOUZA FERNANDES',
          username: 'juliana.fernandes',
          ativo: true
        },
        {
          nome: 'JULIO CESAR COELHO LOPES',
          username: 'julio.lopes',
          ativo: true
        },
        {
          nome: 'JURANDIR SEBASTIAO DOS SANTOS',
          username: 'jurandir.santos',
          ativo: true
        },
        {
          nome: 'KATIA FERNANDA DA SILVA',
          username: 'katia.silva',
          ativo: true
        },
        {
          nome: 'LEANDRO FERNANDES',
          username: 'leandro.fernandes',
          ativo: true
        },
        {
          nome: 'LEVI FERREIRA DA SILVA',
          username: 'levi.silva',
          ativo: true
        },
        {
          nome: 'LUANDRO DAS NEVES DE OLIVEIRA',
          username: 'luandro.oliveira',
          ativo: true
        },
        {
          nome: 'LUCAS FERREIRA GOULART',
          username: 'lucas.goulart',
          ativo: true
        },
        {
          nome: 'LUCAS RODRIGO PORRINO GUERREIRO',
          username: 'lucas.guerreiro',
          ativo: true
        },
        {
          nome: 'LUCIANA DE FATIMA LOVATO',
          username: 'luciana.lovato',
          ativo: true
        },
        {
          nome: 'LUCIANNA ZART FONTES BONDI',
          username: 'lucianna.bondi',
          ativo: true
        },
        {
          nome: 'LUCIANO MANOEL BLUMER ARAMINI',
          username: 'luciano.aramini',
          ativo: true
        },
        {
          nome: "LUCIANO REIS D'AQUINO",
          username: 'luciano.daquino',
          ativo: true
        },
        {
          nome: 'LUIS MARCELO VILAS BOAS',
          username: 'luis.vilasboas',
          ativo: true
        },
        {
          nome: 'LUIZ CARLOS MASSARENTI',
          username: 'luiz.massarenti',
          ativo: true
        },
        {
          nome: 'LUIZ HENRIQUE URBANO',
          username: 'luiz.urbano',
          ativo: true
        },
        {
          nome: 'MARCELO HENRIQUE BOSCHINI',
          username: 'marcelo.boschini',
          ativo: true
        },
        {
          nome: 'MARCELO RODRIGUES',
          username: 'marcelo.rodrigues',
          ativo: true
        },
        {
          nome: 'MARCIO MANOEL DOS SANTOS',
          username: 'marcio.santos',
          ativo: true
        },
        {
          nome: 'MARCOS ANTONIO GARCIA',
          username: 'marcos.garcia',
          ativo: true
        },
        {
          nome: 'MARCOS ROBERTO TROMBAIOLI',
          username: 'marcos.trombaioli',
          ativo: true
        },
        {
          nome: 'MARCOS SANTOS DE BRITO',
          username: 'marcos.brito',
          ativo: true
        },
        {
          nome: 'MARCOS SILVA PAULO',
          username: 'marcos.paulo',
          ativo: true
        },
        {
          nome: 'MARCOS VINICIUS DE PAIVA',
          username: 'marcos.paiva',
          ativo: true
        },
        {
          nome: 'MARIO EUCLIDES GERMIGNIANE',
          username: 'mario.gerrmigniane',
          ativo: true
        },
        {
          nome: 'MATHEUS PIEDADE GABRIEL',
          username: 'matheus.gabriel',
          ativo: true
        },
        {
          nome: 'MAURICIO ESTEVAM DE RESENDE',
          username: 'mauricio.resende',
          ativo: true
        },
        {
          nome: 'MURILLO DE CICCO',
          username: 'murillo.dicicco',
          ativo: true
        },
        {
          nome: 'NILSON ANGELO DE CASTRO',
          username: 'nilson.castro',
          ativo: true
        },
        {
          nome: 'ODAIR COSTA DA SILVA',
          username: 'odair.silva',
          ativo: true
        },
        {
          nome: 'PATRICIA TEIXEIRA GONCALVES',
          username: 'patricia.goncalves',
          ativo: true
        },
        {
          nome: 'PAULO CESAR SOUZA',
          username: 'paulo.souza',
          ativo: true
        },
        {
          nome: 'PAULO DOS SANTOS',
          username: 'paulo.santos',
          ativo: true
        },
        {
          nome: 'PAULO FLORIANO',
          username: 'paulo.floriano',
          ativo: true
        },
        {
          nome: 'PORTARIA NEO RODAS',
          username: 'portaria',
          ativo: true
        },
        {
          nome: 'PRISCILA PERINI PREVITALE',
          username: 'priscila.previtale',
          ativo: true
        },
        {
          nome: 'RAFAEL AUGUSTO POLIDORO',
          username: 'rafael.polidoro',
          ativo: true
        },
        {
          nome: 'RAFAEL MOREIRA SAMPAIO',
          username: 'rafael.sampaio',
          ativo: true
        },
        {
          nome: 'RAIMUNDO BARROSO',
          username: 'raimundo.barroso',
          ativo: true
        },
        {
          nome: 'RAIMUNDO PEREIRA DA ROCHA',
          username: 'raimundo.rocha',
          ativo: true
        },
        {
          nome: 'RENATO APARECIDO DA SILVA MENEZES',
          username: 'renato.menezes',
          ativo: true
        },
        {
          nome: 'RICARDO GUERINI',
          username: 'ricardo.guerini',
          ativo: true
        },
        {
          nome: 'ROBSON APARECIDO DOS SANTOS',
          username: 'robson.santos',
          ativo: true
        },
        {
          nome: 'ROBSON CRISTIANO BRAGHETTO',
          username: 'robson.braghetto',
          ativo: true
        },
        {
          nome: 'RODRIGO SCHELBAUER',
          username: 'rodrigo.schelbauer',
          ativo: true
        },
        {
          nome: 'ROGERIO ELIAS OLIVEIRA',
          username: 'rogerio.oliveira',
          ativo: true
        },
        {
          nome: 'ROODNEY EUGENIO FERNANDES',
          username: 'roodney.fernandes',
          ativo: true
        },
        {
          nome: 'ROSANA PEREIRA',
          username: 'rosana.pereira',
          ativo: true
        },
        {
          nome: 'ROSENI LELIS DE OLIVEIRA',
          username: 'roseni.oliveira',
          ativo: true
        },
        {
          nome: 'SANDER ALVES DE OLIVEIRA',
          username: 'sander.oliveira',
          ativo: true
        },
        {
          nome: 'SERGIO PEREIRA ALVES JUNIOR',
          username: 'sergio.alves',
          ativo: true
        },
        {
          nome: 'SERLANDIA OLIVEIRA DE SOUZA',
          username: 'serlandia.souza',
          ativo: true
        },
        {
          nome: 'SMAILE MARAFELLI CARVALHO',
          username: 'smaile.caravalho',
          ativo: true
        },
        {
          nome: 'THIAGO JAIR GONCALVES',
          username: 'thiago.goncalves',
          ativo: true
        },
        {
          nome: 'TIAGO MIRANDA',
          username: 'tiago.mirand',
          ativo: true
        },
        {
          nome: 'VALDENIR TEIXEIRA DE CARVALHO',
          username: 'valdenir.carvalho',
          ativo: true
        },
        {
          nome: 'VALDILANE THOME',
          username: 'valdilane.thome',
          ativo: true
        },
        {
          nome: 'VALTER BARBOSA DA SILVA',
          username: 'valter.silva',
          ativo: true
        },
        {
          nome: 'VITAR DONIZETE VICENTE',
          username: 'vitar.vicente',
          ativo: true
        },
        {
          nome: 'VITOR DOMINGOS RIBEIRO',
          username: 'vitor.ribeiro',
          ativo: true
        },
        {
          nome: 'WANDERSON LIMA MEDEIROS',
          username: 'wanderson.medeiros',
          ativo: true
        },
        {
          nome: 'YAHN VICENTINI BARBIERO',
          username: 'yahn.barbiero',
          ativo: true
        },
        {
          nome: 'YGOR FAGUNDES SILVA',
          username: 'ygor.silva',
          ativo: true
        },
        {
          nome: 'ZAYRA OHANNA DOS SANTOS',
          username: 'zayra.santos',
          ativo: true
        }
      ], { transaction })
      const contasInsert = await sequelize.models.Conta.bulkCreate([{
        email: 'adelson.souza@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'adilson.chagas@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'adir.santos@abgbrasil.com',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'adriano.tonetti@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'adriano.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'alex.neves@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'alexandre.souza@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'alexandre.abage@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'amanda.mafra@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'anderson.freitas@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'andre.cruz@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'andrea.grabalos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'andreia.tobias@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'ateildo.lima@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'benicio.dias@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'bianca.reale@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'brenna.matos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'carlos.rodrigues@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'carlos.ferreira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'cesar.assis@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'claudinei.pirelli@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'costabile.bronzo@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'daiani.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'daniel.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'danilo.campos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'danilo.primo@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'denilson.fonseca@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'dieferson.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'douglas.oliveira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'eduardo.vieira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'eduardo.iwamoto@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'eliane.barros@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'fabio.assis@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'fernando.pasqualini@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'fernando.ziliotto@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'francisco.rezende@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'francisco.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'francisco.oliveira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'gabriel.carminhotto@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'gabriel.olhier@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'gelson.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'gilmar.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'giovana.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'ivan.borges@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'ivanir.balbino@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'ivens.pantaleao@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jailson.cubines@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jamiles.marques@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'janaina.matias@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jaqueline.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jedielson.arceno@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jessica.favoretto@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jonathan.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jorge.souza@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.augusto@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.assis@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.cipriano@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.coelho@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.ramalheira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.martins@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.pereira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jose.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'josiane.azevedo@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'juliana.martins@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'juliana.fernandes@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'julio.lopes@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'jurandir.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'katia.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'leandro.fernandes@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'levi.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luandro.oliveira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'lucas.goulart@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'lucas.guerreiro@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luciana.lovato@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'lucianna.bondi@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luciano.aramini@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luciano.daquino@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luis.vilasboas@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luiz.massarenti@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'luiz.urbano@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcelo.boschini@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcelo.rodrigues@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcio.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcos.garcia@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcos.trombaioli@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcos.brito@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcos.paulo@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'marcos.paiva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'mario.gerrmigniane@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'matheus.gabriel@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'mauricio.resende@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'murillo.dicicco@abgbrasil.com',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'nilson.castro@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'odair.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'patricia.goncalves@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'paulo.souza@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'paulo.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'paulo.floriano@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'portaria@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'priscila.previtale@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'rafael.polidoro@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'rafael.sampaio@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'raimundo.barroso@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'raimundo.rocha@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'renato.menezes@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'ricardo.guerini@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'robson.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'robson.braghetto@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'rodrigo.schelbauer@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'rogerio.oliveira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'roodney.fernandes@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'rosana.pereira@abgbrasil.com',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'roseni.oliveira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'sander.oliveira@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'sergio.alves@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'serlandia.souza@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'smaile.caravalho@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'thiago.goncalves@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'tiago.mirand@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'valdenir.carvalho@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'valdilane.thome@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'valter.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'vitar.vicente@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'vitor.ribeiro@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'wanderson.medeiros@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'yahn.barbiero@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'ygor.silva@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      },
      {
        email: 'zayra.santos@neorodas.com.br',
        tempoAcessoInicio: '08:00',
        tempoAcessoFim: '18:00'
      }], { transaction })
      const permissao = await sequelize.models.Permissao.findOne({ where: { nome: 'USUARIO' } })

      let index = 0
      for (const usuario of usuariosInsert) {
        await usuario.setContas([contasInsert[index]], { transaction })
        await usuario.setPermissoes([permissao], { transaction })
        index += 1
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('usuarios', {
      username: { [Sequelize.Op.in]: [
        'adelson.souza',
        'adilson.chagas',
        'adir.santos',
        'adriano.tonetti',
        'adriano.silva',
        'alex.neves',
        'alexandre.souza',
        'alexandre.abage',
        'amanda.mafra',
        'anderson.freitas',
        'andre.cruz',
        'andrea.grabalos',
        'andreia.tobias',
        'ateildo.lima',
        'benicio.dias',
        'bianca.reale',
        'brenna.matos',
        'carlos.rodrigues',
        'carlos.ferreira',
        'cesar.assis',
        'claudinei.pirelli',
        'costabile.bronzo',
        'daiani.silva',
        'daniel.santos',
        'danilo.campos',
        'danilo.primo',
        'denilson.fonseca',
        'dieferson.silva',
        'douglas.oliveira',
        'eduardo.vieira',
        'eduardo.iwamoto',
        'eliane.barros',
        'fabio.assis',
        'fernando.pasqualini',
        'fernando.ziliotto',
        'francisco.rezende',
        'francisco.silva',
        'francisco.oliveira',
        'gabriel.carminhotto',
        'gabriel.olhier',
        'gelson.santos',
        'gilmar.santos',
        'giovana.silva',
        'ivan.borges',
        'ivanir.balbino',
        'ivens.pantaleao',
        'jailson.cubines',
        'jamiles.marques',
        'janaina.matias',
        'jaqueline.silva',
        'jedielson.arceno',
        'jessica.favoretto',
        'jonathan.santos',
        'jorge.souza',
        'jose.augusto',
        'jose.santos',
        'jose.assis',
        'jose.cipriano',
        'jose.coelho',
        'jose.ramalheira',
        'jose.martins',
        'jose.pereira',
        'jose.silva',
        'josiane.azevedo',
        'juliana.martins',
        'juliana.fernandes',
        'julio.lopes',
        'jurandir.santos',
        'katia.silva',
        'leandro.fernandes',
        'levi.silva',
        'luandro.oliveira',
        'lucas.goulart',
        'lucas.guerreiro',
        'luciana.lovato',
        'lucianna.bondi',
        'luciano.aramini',
        'luciano.daquino',
        'luis.vilasboas',
        'luiz.massarenti',
        'luiz.urbano',
        'marcelo.boschini',
        'marcelo.rodrigues',
        'marcio.santos',
        'marcos.garcia',
        'marcos.trombaioli',
        'marcos.brito',
        'marcos.paulo',
        'marcos.paiva',
        'mario.gerrmigniane',
        'matheus.gabriel',
        'mauricio.resende',
        'murillo.dicicco',
        'nilson.castro',
        'odair.silva',
        'patricia.goncalves',
        'paulo.souza',
        'paulo.santos',
        'paulo.floriano',
        'portaria',
        'priscila.previtale',
        'rafael.polidoro',
        'rafael.sampaio',
        'raimundo.barroso',
        'raimundo.rocha',
        'renato.menezes',
        'ricardo.guerini',
        'robson.santos',
        'robson.braghetto',
        'rodrigo.schelbauer',
        'rogerio.oliveira',
        'roodney.fernandes',
        'rosana.pereira',
        'roseni.oliveira',
        'sander.oliveira',
        'sergio.alves',
        'serlandia.souza',
        'smaile.caravalho',
        'thiago.goncalves',
        'tiago.mirand',
        'valdenir.carvalho',
        'valdilane.thome',
        'valter.silva',
        'vitar.vicente',
        'vitor.ribeiro',
        'wanderson.medeiros',
        'yahn.barbiero',
        'ygor.silva',
        'zayra.santos'
      ] }
    })
    await queryInterface.bulkDelete('contas', {
      email: { [Sequelize.Op.in]: [
        'adelson.souza@neorodas.com.br',
        'adilson.chagas@neorodas.com.br',
        'adir.santos@abgbrasil.com',
        'adriano.tonetti@neorodas.com.br',
        'adriano.silva@neorodas.com.br',
        'alex.neves@neorodas.com.br',
        'alexandre.souza@neorodas.com.br',
        'alexandre.abage@neorodas.com.br',
        'amanda.mafra@neorodas.com.br',
        'anderson.freitas@neorodas.com.br',
        'andre.cruz@neorodas.com.br',
        'andrea.grabalos@neorodas.com.br',
        'andreia.tobias@neorodas.com.br',
        'ateildo.lima@neorodas.com.br',
        'benicio.dias@neorodas.com.br',
        'bianca.reale@neorodas.com.br',
        'brenna.matos@neorodas.com.br',
        'carlos.rodrigues@neorodas.com.br',
        'carlos.ferreira@neorodas.com.br',
        'cesar.assis@neorodas.com.br',
        'claudinei.pirelli@neorodas.com.br',
        'costabile.bronzo@neorodas.com.br',
        'daiani.silva@neorodas.com.br',
        'daniel.santos@neorodas.com.br',
        'danilo.campos@neorodas.com.br',
        'danilo.primo@neorodas.com.br',
        'denilson.fonseca@neorodas.com.br',
        'dieferson.silva@neorodas.com.br',
        'douglas.oliveira@neorodas.com.br',
        'eduardo.vieira@neorodas.com.br',
        'eduardo.iwamoto@neorodas.com.br',
        'eliane.barros@neorodas.com.br',
        'fabio.assis@neorodas.com.br',
        'fernando.pasqualini@neorodas.com.br',
        'fernando.ziliotto@neorodas.com.br',
        'francisco.rezende@neorodas.com.br',
        'francisco.silva@neorodas.com.br',
        'francisco.oliveira@neorodas.com.br',
        'gabriel.carminhotto@neorodas.com.br',
        'gabriel.olhier@neorodas.com.br',
        'gelson.santos@neorodas.com.br',
        'gilmar.santos@neorodas.com.br',
        'giovana.silva@neorodas.com.br',
        'ivan.borges@neorodas.com.br',
        'ivanir.balbino@neorodas.com.br',
        'ivens.pantaleao@neorodas.com.br',
        'jailson.cubines@neorodas.com.br',
        'jamiles.marques@neorodas.com.br',
        'janaina.matias@neorodas.com.br',
        'jaqueline.silva@neorodas.com.br',
        'jedielson.arceno@neorodas.com.br',
        'jessica.favoretto@neorodas.com.br',
        'jonathan.santos@neorodas.com.br',
        'jorge.souza@neorodas.com.br',
        'jose.augusto@neorodas.com.br',
        'jose.santos@neorodas.com.br',
        'jose.assis@neorodas.com.br',
        'jose.cipriano@neorodas.com.br',
        'jose.coelho@neorodas.com.br',
        'jose.ramalheira@neorodas.com.br',
        'jose.martins@neorodas.com.br',
        'jose.pereira@neorodas.com.br',
        'jose.silva@neorodas.com.br',
        'josiane.azevedo@neorodas.com.br',
        'juliana.martins@neorodas.com.br',
        'juliana.fernandes@neorodas.com.br',
        'julio.lopes@neorodas.com.br',
        'jurandir.santos@neorodas.com.br',
        'katia.silva@neorodas.com.br',
        'leandro.fernandes@neorodas.com.br',
        'levi.silva@neorodas.com.br',
        'luandro.oliveira@neorodas.com.br',
        'lucas.goulart@neorodas.com.br',
        'lucas.guerreiro@neorodas.com.br',
        'luciana.lovato@neorodas.com.br',
        'lucianna.bondi@neorodas.com.br',
        'luciano.aramini@neorodas.com.br',
        'luciano.daquino@neorodas.com.br',
        'luis.vilasboas@neorodas.com.br',
        'luiz.massarenti@neorodas.com.br',
        'luiz.urbano@neorodas.com.br',
        'marcelo.boschini@neorodas.com.br',
        'marcelo.rodrigues@neorodas.com.br',
        'marcio.santos@neorodas.com.br',
        'marcos.garcia@neorodas.com.br',
        'marcos.trombaioli@neorodas.com.br',
        'marcos.brito@neorodas.com.br',
        'marcos.paulo@neorodas.com.br',
        'marcos.paiva@neorodas.com.br',
        'mario.gerrmigniane@neorodas.com.br',
        'matheus.gabriel@neorodas.com.br',
        'mauricio.resende@neorodas.com.br',
        'murillo.dicicco@abgbrasil.com',
        'nilson.castro@neorodas.com.br',
        'odair.silva@neorodas.com.br',
        'patricia.goncalves@neorodas.com.br',
        'paulo.souza@neorodas.com.br',
        'paulo.santos@neorodas.com.br',
        'paulo.floriano@neorodas.com.br',
        'portaria@neorodas.com.br',
        'priscila.previtale@neorodas.com.br',
        'rafael.polidoro@neorodas.com.br',
        'rafael.sampaio@neorodas.com.br',
        'raimundo.barroso@neorodas.com.br',
        'raimundo.rocha@neorodas.com.br',
        'renato.menezes@neorodas.com.br',
        'ricardo.guerini@neorodas.com.br',
        'robson.santos@neorodas.com.br',
        'robson.braghetto@neorodas.com.br',
        'rodrigo.schelbauer@neorodas.com.br',
        'rogerio.oliveira@neorodas.com.br',
        'roodney.fernandes@neorodas.com.br',
        'rosana.pereira@abgbrasil.com',
        'roseni.oliveira@neorodas.com.br',
        'sander.oliveira@neorodas.com.br',
        'sergio.alves@neorodas.com.br',
        'serlandia.souza@neorodas.com.br',
        'smaile.caravalho@neorodas.com.br',
        'thiago.goncalves@neorodas.com.br',
        'tiago.mirand@neorodas.com.br',
        'valdenir.carvalho@neorodas.com.br',
        'valdilane.thome@neorodas.com.br',
        'valter.silva@neorodas.com.br',
        'vitar.vicente@neorodas.com.br',
        'vitor.ribeiro@neorodas.com.br',
        'wanderson.medeiros@neorodas.com.br',
        'yahn.barbiero@neorodas.com.br',
        'ygor.silva@neorodas.com.br',
        'zayra.santos@neorodas.com.br'
      ] }
    })
  }
}
