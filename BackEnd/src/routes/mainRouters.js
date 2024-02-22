const { Router } = require ("express")

const mainRouter = Router()

mainRouter.get("/", (req, res) => {
    res.json("Funcionando correctamente!")
})

module.exports = mainRouter