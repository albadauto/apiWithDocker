const { DataTypes } = require("sequelize");
const connection = require("./db");

const userModel = connection.define("user", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
})


//userModel.sync({force:true}).then(() => console.log("Inserido com sucesso!"));

module.exports = userModel;