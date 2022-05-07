const { insertUser, isValidPassword } = require("../controllers/user.controller");

const userRouter = require("express").Router();

userRouter.post("/insertUser", insertUser);
userRouter.post("/isValidPassword", isValidPassword);


module.exports = userRouter