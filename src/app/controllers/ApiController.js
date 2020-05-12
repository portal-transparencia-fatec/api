const config = require('../../config/database2')
const mysql = require('mysql');

const con = mysql.createConnection(config);

class ApiController {

  async getServidores(req, res) {
    try {
      con.connect((err) =>  {
        if (err) throw err;
        console.log("Connected!");
        var sql = `SELECT * FROM servidores`;
       
        con.query(sql, function (error, results, fields) {
          if (err) throw err;
          res.json(results)
        });
      });
    } catch (err) {
      console.log(err)
    }
  }

  async getServidor(req, res) {
    try {
      const { rgf } = req.params
      con.connect((err) =>  {
        if (err) throw err;
        var sql = `SELECT * FROM servidores WHERE rgf='${rgf}'`;
        
        con.query(sql, function (error, results, fields) {
          if (err) throw err;
          res.json(results)
        });
      });
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = new ApiController()
