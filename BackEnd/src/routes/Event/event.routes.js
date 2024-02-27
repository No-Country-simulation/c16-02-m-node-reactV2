const { Router } = require("express");

const eventRouter = Router()

const createEvent = require("../../controllers/Event/createEvent")
const getAllEvents = require("../../controllers/Event/getAllEvents")
const getEventById = require("../../controllers/Event/getEnventById")
const updateEvent = require("../../controllers/Event/updateEvent")
const deleteEvent = require("../../controllers/Event/deleteEvent")

eventRouter.get("/", getAllEvents)
eventRouter.get("/:id", getEventById)
eventRouter.post("/create", createEvent)
eventRouter.put("/update/:id", updateEvent)
eventRouter.delete("/delete/:id", deleteEvent)

module.exports = eventRouter