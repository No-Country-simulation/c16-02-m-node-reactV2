// controllers/eventController.js
const { Event } = require("../../db");

const createEventsFromJSON = async (eventsData) => {

    const existingEvents = await Event.findAll()

    if (existingEvents.length > 0) {
        console.log("Ya existen recursos en la base de datos.");
        return
    }

    try {
        // Itera sobre el arreglo JSON y crea un evento para cada objeto
        for (const eventData of eventsData) {
            await Event.create(eventData);
        }
        console.log("Eventos creados desde JSON:", eventsData.length);
    } catch (error) {
        console.log("Error al crear eventos desde JSON:", error);
    }
};

module.exports = createEventsFromJSON;
