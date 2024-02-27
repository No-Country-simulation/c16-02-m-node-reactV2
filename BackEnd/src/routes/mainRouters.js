const { Router } = require("express")

const eventRouter = require("../routes/Event/event.routes")

const mainRouter = Router()

mainRouter.use("/event", eventRouter)

module.exports = mainRouter