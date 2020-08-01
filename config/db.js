const Sequelize = require('sequelize')

const sequalize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'|'sqlite'|'postgres'|'mssql',
    operatorsAliases: false,

    pool: {
        max:5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    //SQLite solo
    storage: 'path/to/database.sqlite'
})
