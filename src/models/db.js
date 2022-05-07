const Sequelize = require("sequelize");
const connection = new Sequelize("dbapi", "root", "root", {
    dialect: "mysql",
    host: "databaseapi"
})

module.exports = connection