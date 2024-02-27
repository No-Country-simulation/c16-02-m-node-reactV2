const { Event } = require("../../db");

const getEventById = async (req, res) => {
    const eventId = req.params.id;

    try {
        // Buscar el evento por su ID en la base de datos, pero solo si no está eliminado
        const event = await Event.findOne({
            where: {
                id: eventId,
                eliminado: false
            }
        });

        // Verificar si el evento fue encontrado
        if (!event) {
            return res.status(404).json({ msg: "Evento no encontrado" });
        }

        // Responder con el evento encontrado
        res.status(200).json(event);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al buscar el evento" });
    }
};

module.exports = getEventById;
