const { insertProduct, showAllProducts } = require("../controllers/products.controller");

const productsRouter = require("express").Router();

productsRouter.post("/insertProduct", insertProduct);
productsRouter.get("/allProducts", showAllProducts)

module.exports = productsRouter;