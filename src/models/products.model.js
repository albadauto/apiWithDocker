const { DataTypes } = require("sequelize");
const connection = require("./db");


const productModel = connection.define("products", {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    fornecedor: DataTypes.STRING
});


//productModel.sync({force:true}).then(() => console.log("Criado com sucesso"));

module.exports = productModel;