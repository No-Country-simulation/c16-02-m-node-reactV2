// controllers/eventController.js
const { Event } = require("../../db");

const getAllEvents = async (req, res) => {
    try {
        // Buscar todos los eventos en la base de datos que no están eliminados
        const events = await Event.findAll({
            where: {
                eliminado: false
            }
        });

        // Responder con los eventos encontrados
        res.status(200).json(events);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al buscar eventos" });
    }
};

module.exports = getAllEvents;
