const { Sequelize } = require('sequelize');
const db = require('../db');

const Cliente = db.define('cliente', {
    cli_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    cli_nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cli_email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cli_data_cadastro: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

try {
    Cliente.sync({ force: false });
    console.log('Tabela criada com sucesso!');
} catch (error) {
    console.log('Erro ao criar tabela:', error);
}

module.exports = Cliente;
