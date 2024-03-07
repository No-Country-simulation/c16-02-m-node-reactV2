require("dotenv").config()
const app = require("./src/app")
const { conn } = require("./src/db.js")
const createEventJson = require("./src/controllers/Event/createEventJson.js")
const dataJson = require("./src/helpers/data.json")

const PORT = 3001

conn.sync({
    force: false,
}).then(() => {
    createEventJson(dataJson)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`🚀 Server corriendo en puerto ${PORT}`);
            })
        }).catch((error) => {
            console.log("Error al iniciar el servidor", error)
        })
})