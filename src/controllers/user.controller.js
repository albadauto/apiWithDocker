const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.insertUser = async (request, response) => {
   try{
       const {name, email, password} = request.body;
       if (await userModel.create({name, email, password})){
           response.status(200).json({
               error: false,
               message:"Cadastrado com sucesso!"
           })
       }else{
           response.status(404).json({
               error:true,
               message: "Algo deu errado!"
           })
       }
   }catch(err){
       console.log(err);
   }
}


module.exports.isValidPassword = async (request, response) => {
    try{
        const {email, password} = request.body;
        if(email && password){
            const result = await userModel.findAll({where:{email: email, password:password}});

            if (result.length > 0){
                const token = jwt.sign({id: result.id}, process.env.SECRET_JWT, {expiresIn: 5000});
                response.status(200).json({
                    error:false,
                    token
                })
            }else{
                response.status(404).json({
                    error:true,
                    message: "Erro: Usuário ou senha incorretos"
                });
            }
        }else{
            response.status(501).json({message: "Digite um email e senha!"});
        }
    }catch(err){
        console.log(err);
    }
}