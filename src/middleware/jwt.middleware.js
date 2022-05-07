const jwt = require("jsonwebtoken");
require("dotenv").config();

function verifyJWT(request, response, next){
    const token = request.header('authorization')
    if (!token) return response.status(404).json({error:true, message:"token not found"});
    jwt.verify(token, process.env.SECRET_JWT, (err) => {
        if (err) return response.status(404).json({auth:false, error: err});
        next();
    
    })
}


module.exports = verifyJWT;