module.exports = (sequelize, DataTypes) => {
  const Servidor = sequelize.define('Servidor', {
    rgf: DataTypes.INTEGER,
    nome: DataTypes.STRING,
    cargo: DataTypes.STRING,
    referencia: DataTypes.STRING,
    regime: DataTypes.STRING,
    bruto: DataTypes.DECIMAL,
    liquido: DataTypes.DECIMAL,
    desconto: DataTypes.DECIMAL,
  }, {
    tableName: 'servidor'
  })

  return Servidor
}