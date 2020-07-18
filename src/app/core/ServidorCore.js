const { Servidor, sequelize } = require('../models')
const Sequelize = require('sequelize')
const moment = require('moment')
const http = require('http')
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

  async relatorioPesquisa (ip, dataInicial = undefined, dataFinal = undefined, { regime, cargo, nome, salarioInicial, salarioFinal }) {
    

    moment(dataInicial, 'DD-MM-YYYY').format('YYYY-MM-DD')
    moment(dataFinal, 'DD-MM-YYYY').format('YYYY-MM-DD')

    await sequelize.query(`
      INSERT INTO relatorio_pesquisa (ip, dataInicial, dataFinal, regime, cargo, nome, salarioInicial, salarioFinal) 
      VALUES ('${ip}', '${dataInicial}', '${dataFinal}', '${regime|| ''}', '${cargo || ''}', '', NULL, NULL);
    `)
    console.log()
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
          ORDER BY S1.nome
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

  async getPublicIP () {
    let publicIPv4 = await new Promise((resolve, reject) => {
      try {
        http.get('http://bot.whatismyipaddress.com', function (res) {
          res.setEncoding('utf8')
          res.on('data', function (chunk) {
            resolve(chunk)
          })
        })
      } catch (e) {
        reject(e)
      }
    })
    return publicIPv4
  }

  async getPrivateIP (req) {
    let privateIPv4 = await new Promise((resolve, reject) => {
      try {
        let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress; if (ip.substr(0, 7) == '::ffff:') { ip = ip.substr(7) }
        resolve(ip)
      } catch (e) {
        reject(e)
      }
    })
    return privateIPv4
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

    const salariosServidor = await Servidor.findAll({ where: { rgf }, raw: true });

    const category = salariosServidor.map(({ referencia }) => ({ label: moment(referencia, 'DD-MM-YYYY').format('MMM[/]YYYY') }))
    
    const bruto = salariosServidor.map(({ bruto }) => ({ value: Number(bruto).toFixed(2) }))
    const liquido = salariosServidor.map(({ liquido }) => ({ value: Number(liquido).toFixed(2) }))
    const desconto = salariosServidor.map(({ desconto }) => ({ value: Number(desconto).toFixed(2) }))
    
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

  
  async getAllByNome (nome) {
    const servidores = await sequelize.query(`
      SELECT S1.* FROM servidor AS S1
        INNER JOIN (
            SELECT rgf, MAX(id) As id
              FROM servidor
                WHERE (
                  nome LIKE '%${nome}%'
                )
                  GROUP BY rgf     
        ) As S2
          ON S1.id = S2.id
          ORDER BY S1.nome
    `, { type: QueryTypes.SELECT });

    return ({ servidores })

  }
  
  async getAllSalariosByRgfs (rgfs) {
    const colors = [
      '0404B4',
      'FF0000',
      '3ADF00',
      'DF013A',
      '071019',
      '01F4DF',
      'FD5E01',
      '6520EF',
      '4F5B5B',
      '343421',
    ]
    const data = [];

    for (const [index, rgf] of rgfs.entries()) {
      const salariosServidor = await Servidor.findAll({ where: { rgf }, raw: true });
      data.push(salariosServidor)
    }

    const datasetLiquido = data.map((item, index) => ({
      seriesname: item[0].nome,
      anchorbgcolor: `${colors[index]}`,
      data: data[index].map(({ liquido }) => ({ value: Number(liquido).toFixed(2) }))
    }))

    const datasetDesconto = data.map((item, index) => ({
      seriesname: item[0].nome,
      anchorbgcolor: `${colors[index]}`,
      data: data[index].map(({ desconto }) => ({ value: Number(desconto).toFixed(2) }))
    }))

    const datasetBruto = data.map((item, index) => ({
      seriesname: item[0].nome,
      anchorbgcolor: `${colors[index]}`,
      data: data[index].map(({ bruto }) => ({ value: Number(bruto).toFixed(2) }))
    }))




    return ({

      chartLiquido:  {
        "type": "msline",
        "width": "100%",
        "height": "70%",
        "dataFormat": "json",
        "dataSource": {
          "chart": {
            "caption": "Líquido",
            "subcaption": "2020",
            "theme": "fusion",
            "paletteColors": colors.join(', '),
            "yAxisName": "Receita (em BRL)",
            "numberPrefix": "R$"
          },
          "categories": [{
            "category": [{
              "label": "Jan/2020"
            }, {
              "label": "Feb/2020"
            }, {
              "label": "Mar/2020"
            }, {
              "label": "Apr/2020"
            }, {
              "label": "May/2020"
            }, {
              "label": "Jun/2020"
            }]
          }],
          dataset: datasetLiquido,
        }
      },

    chartDesconto:  {
      "type": "msline",
      "width": "100%",
      "height": "70%",
      "dataFormat": "json",
      "dataSource": {
        "chart": {
          "caption": "Descontos",
          "subcaption": "2020",
          "theme": "fusion",
          "paletteColors": colors.join(', '),
          "yAxisName": "Receita (em BRL)",
          "numberPrefix": "R$"
        },
        "categories": [{
          "category": [{
            "label": "Jan/2020"
          }, {
            "label": "Feb/2020"
          }, {
            "label": "Mar/2020"
          }, {
            "label": "Apr/2020"
          }, {
            "label": "May/2020"
          }, {
            "label": "Jun/2020"
          }]
        }],
        dataset: datasetDesconto,
      }
    },


    chartBruto:  {
        "type": "msline",
        "width": "100%",
        "height": "70%",
        "dataFormat": "json",
        "dataSource": {
          "chart": {
            "caption": "Bruto",
            "subcaption": "2020",
            "theme": "fusion",
            "paletteColors": colors.join(', '),
            "yAxisName": "Receita (em BRL)",
            "numberPrefix": "R$"
          },
          "categories": [{
            "category": [{
              "label": "Jan/2020"
            }, {
              "label": "Feb/2020"
            }, {
              "label": "Mar/2020"
            }, {
              "label": "Apr/2020"
            }, {
              "label": "May/2020"
            }, {
              "label": "Jun/2020"
            }]
          }],
          dataset: datasetBruto,
        }
      }
    }
    )
  }
}

module.exports = new ServidorCore()
