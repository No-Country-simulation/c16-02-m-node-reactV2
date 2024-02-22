require("dotenv").config()
const app = require("./src/app")
const { conn } = require("./src/db.js")

const PORT = 3001

conn.sync({
    force: false,
}).then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server corriendo en puerto ${PORT}`);
    })
})