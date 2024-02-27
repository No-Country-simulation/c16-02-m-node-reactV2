const { Router } = require("express")

const eventRouter = require("../routes/Event/event.routes")
const userRouter = require ("../routes/User/user.routes")

const mainRouter = Router()
mainRouter.use("/user", userRouter)
mainRouter.use("/event", eventRouter)

module.exports = mainRouter