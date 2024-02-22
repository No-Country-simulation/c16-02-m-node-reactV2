const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const cookieParser = require("cookie-parser")
const mainRouter = require("./routes/mainRouters")

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(express.json({ limit: "50mb"}))
app.use(cookieParser())
app.use(morgan("dev"))

app.use("/", mainRouter)

app.use((err, req, res, next ) => {
    const status = err.status || 500;
    const message = err.message || "Internal app Error";
    console.error(err);
    res.status(status).send(message)
})

module.exports = app;