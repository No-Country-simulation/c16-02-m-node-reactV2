const { Router } = require("express")

const userRouter = Router()

const createUser = require("../../controllers/User/createUser")
const getAllUsers = require("../../controllers/User/getAllUsers")
const getUserById = require("../../controllers/User/getUserById")
const loginUser = require("../../controllers/User/loginUser")
const updateUser = require("../../controllers/User/updateUser")
const deleteUser = require("../../controllers/User/deleteUser")
//Favoritos
const addFavorite = require("../../controllers/Favorites/addFavorites")
const getUserFavorites = require("../../controllers/Favorites/getUserFavorites")
const deleteFavorites = require("../../controllers/Favorites/deleteFavorites")

userRouter.post("/create", createUser)
userRouter.post("/login", loginUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.put("/update/:id", updateUser)
userRouter.delete("/delete/:id", deleteUser)

// Nueva ruta para agregar favoritos al usuario
userRouter.post("/:id/favorites", addFavorite)
userRouter.get("/:id/favorites-get", getUserFavorites)
userRouter.delete("/:id/favorites-delete", deleteFavorites)


module.exports = userRouter