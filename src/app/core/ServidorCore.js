const { Servidor, sequelize } = require('../models')
const Sequelize = require('sequelize')
const moment = require('moment')
const { QueryTypes, Op } = Sequelize

class ServidorCore {
  
  criar (servidor) {
    return Servidor.create(servidor)
  }

  remover (id) {
    return Servidor.destroy({ where: { id } })
  }

  atualizar ({id, ...servidor}) {
    return Servidor.update(servidor, { where: { id } })
  }

  async listar (page = 0, rowsPerPage = 10, dataInicial = '01-01-2020', dataFinal = '01-01-2020', { regime, cargo }) {
    const offset = page * Number(rowsPerPage);
    const limit = Number(rowsPerPage);

  
    console.log(regime, cargo)
    
    const servidores = await sequelize.query(`
      SELECT S1.* FROM servidor AS S1
        INNER JOIN (
            SELECT rgf, MAX(id) As id
              FROM servidor 
                WHERE (
                  referencia BETWEEN '${dataInicial}' AND '${dataFinal}'
                  ${cargo ? `AND cargo = '${cargo}'` : ''}
                  ${regime ? `AND regime = '${regime}'` : ''}
                  )
                  GROUP BY rgf
                    LIMIT ${limit}
                      OFFSET ${offset}
                      
        ) As S2
          ON S1.id = S2.id
    `, { type: QueryTypes.SELECT });

    const data = await sequelize.query(`
      SELECT COUNT(*) AS qtdServidores FROM servidor
        AS S1
        INNER JOIN (
            SELECT rgf, MAX(id) As id
              FROM servidor 
                WHERE (
                  referencia BETWEEN '${dataInicial}' AND '${dataFinal}'
                  ${cargo ? `AND cargo = '${cargo}'` : ''}
                  ${regime ? `AND regime = '${regime}'` : ''}
                )
                  GROUP BY rgf
                      
        ) As S2
          ON S1.id = S2.id
    `, { type: QueryTypes.SELECT });

    return ({
      page,
      qtdServidores: data[0].qtdServidores,
      servidores,
    })
  }

  listarPorId (id) {
    return Servidor.findByPk(id)
  }

  async getAllCargos () {
    return sequelize.query(`
    SELECT S1.cargo FROM servidor AS S1
      INNER JOIN (
            SELECT cargo, MAX(id) As id
              FROM servidor
                  GROUP BY cargo
                      
        ) As S2
          ON S1.id = S2.id
    `, { type: QueryTypes.SELECT });
  }

  async getAllRegimes () {
    return sequelize.query(`
    SELECT S1.regime FROM servidor AS S1
      INNER JOIN (
            SELECT regime, MAX(id) As id
              FROM servidor
                  GROUP BY regime
                      
        ) As S2
          ON S1.id = S2.id
    `, { type: QueryTypes.SELECT });
  }


  async getAllSalariosByRgf (rgf) {

    const salariosServidores = await Servidor.findAll({ where: { rgf }, raw: true });

    const category = salariosServidores.map(({ referencia }) => ({ label: moment(referencia, 'DD-MM-YYYY').format('MMM[/]YYYY') }))
    
    const bruto = salariosServidores.map(({ bruto }) => ({ value: Number(bruto).toFixed(2) }))
    const liquido = salariosServidores.map(({ liquido }) => ({ value: Number(liquido).toFixed(2) }))
    const desconto = salariosServidores.map(({ desconto }) => ({ value: Number(desconto).toFixed(2) }))
    
    return ({
      type: "msline",
      width: "100%",
      height: "80%",
      dataFormat: "json",
      dataSource: {
        chart: {
          caption: "Renda por período",
          subcaption: "2020",
          theme: "fusion",
          paletteColors : '378B2E, FFFF03, FF1003',
          yAxisName: "Receita (em BRL)",
          numberPrefix: "R$",
        },
        categories:  [{ category }],
        dataset: [{
          seriesname: "Bruto",
          anchorbgcolor: "#378B2E",
          data: bruto,
        }, {
          seriesname: "Líquido",
          anchorbgcolor: "#FFFF03",
          data: liquido,
        }, {
          seriesname: "Descontos",
          anchorbgcolor: "#FF1003",
          data: desconto,
        }]
      }
    })
  }
  //   return sequelize.query(`
  //   SELECT S1.regime FROM servidor AS S1
  //     INNER JOIN (
  //           SELECT regime, MAX(id) As id
  //             FROM servidor
  //                 GROUP BY regime
                      
  //       ) As S2
  //         ON S1.id = S2.id
  //   `, { type: QueryTypes.SELECT });
  // }
}

module.exports = new ServidorCore()
