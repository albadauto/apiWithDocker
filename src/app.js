const express = require("express");
const verifyJWT = require("./middleware/jwt.middleware");
const connection = require("./models/db");
const productsRouter = require("./routes/products.router");
const userRouter = require("./routes/user.router");
const app = express();

//CONFIG
app.use(express.json());

//ROUTES
app.use("/users", userRouter);
app.use("/products", verifyJWT, productsRouter);

//DATABASE
connection.authenticate()
.then(() => console.log("Banco de dados rodando!"))
.catch((err) => console.log("Erro: " + err))


module.exports = {
    http: app
}