const { Router } = require("express")

const userRouter = Router()

const createUser = require("../../controllers/User/createUser")
const getAllUsers = require("../../controllers/User/getAllUsers")
const getUserById = require("../../controllers/User/getUserById")
const loginUser = require("../../controllers/User/loginUser")
const updateUser = require("../../controllers/User/updateUser")
const deleteUser = require("../../controllers/User/deleteUser")

userRouter.post("/create", createUser)
userRouter.post("/login", loginUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.put("/update/:id", updateUser)
userRouter.delete("/delete/:id", deleteUser)


module.exports = userRouter