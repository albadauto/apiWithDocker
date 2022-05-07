const productModel = require("../models/products.model");
const procutsModel = require("../models/products.model");

module.exports.insertProduct = async (request, response) => {
    try{
        const {name, fornecedor, type} = request.body;
        if (await procutsModel.create({name, fornecedor, type})){
            response.status(200).json({isInserted:true, msg: "Inserido com sucesso!"});
        };
    }catch(err){
        console.log(err)
    }
}


module.exports.showAllProducts = async (request, response) => {
    try{
        const result = await productModel.findAll({});
        if (result.length > 0){
            response.status(200).json({
                error:false,
                result: result
            })
        }else{
            response.status(404).json({
                error: "Nenhum produto encontrado no banco de dados!"
            })
        }
    }catch(err){
        console.log(err);
    }
}