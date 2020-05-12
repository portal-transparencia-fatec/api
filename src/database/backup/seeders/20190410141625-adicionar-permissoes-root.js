'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const [rowsUsuarios] = await queryInterface.sequelize.query(
      "SELECT id FROM usuarios WHERE username = 'marcos.morais';"
    )
    const [rowsPermissoes] = await queryInterface.sequelize.query(
      "SELECT id FROM permissoes WHERE nome IN ('ADMINISTRADOR', 'USUARIO');"
    )

    const [usuario] = rowsUsuarios
    const [permissaoAdmin, permissaoUsuario] = rowsPermissoes

    await queryInterface.bulkInsert('usuarios_permissoes', [
      { usuario_id: usuario.id, permissao_id: permissaoAdmin.id },
      { usuario_id: usuario.id, permissao_id: permissaoUsuario.id }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    const [rowsUsuarios] = await queryInterface.sequelize.query(
      "SELECT id FROM usuarios WHERE username = 'marcos.morais';"
    )

    const [usuario] = rowsUsuarios

    await queryInterface.bulkDelete('usuarios_permissoes', [
      { usuario_id: usuario.id },
      { usuario_id: usuario.id }
    ])
  }
}
