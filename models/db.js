const Sequelize = require("sequelize")

const sequelize = new Sequelize('apps', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}