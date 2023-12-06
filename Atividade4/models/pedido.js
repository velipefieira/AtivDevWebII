const { Sequelize } = require('sequelize');
const db = require('../db');
const Cliente = require('./cliente');

const Pedido = db.define('pedido', {
    ped_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    ped_desc: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ped_valor: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    cli_id: {
        type: Sequelize.INTEGER,
        
    },
    ped_data: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
});

Pedido.belongsTo(Cliente, { as: 'cliente', foreignKey: 'cli_id', onDelete: 'CASCADE' });

    try {
        Pedido.sync({ force: false })
        console.log('Tabela criada com sucesso!');
    } catch (error) {
        console.log('Erro ao criar tabela:', error);
    }

module.exports = Pedido