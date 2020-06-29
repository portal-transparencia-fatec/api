const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
  }, {
    hooks: {
      beforeCreate: (user) => {
        const salt = bcrypt.genSaltSync();
        user.senha = bcrypt.hashSync(user.senha, salt);
      }
    },
    instanceMethods: {
      validPassword: function(senha) {
        return bcrypt.compareSync(senha, this.senha);
      }
    },
    tableName: 'usuario'
  })

  return Usuario
}