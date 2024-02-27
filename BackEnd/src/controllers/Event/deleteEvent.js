// controllers/eventController.js
const { Event } = require("../../db");

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;

  try {
    // Buscar el evento por su ID en la base de datos
    const event = await Event.findByPk(eventId);

    // Verificar si el evento fue encontrado
    if (!event) {
      return res.status(404).json({ msg: "Evento no encontrado" });
    }

    // Realizar el borrado lógico del evento
    event.eliminado = true;
    await event.save();

    // Responder con un mensaje de éxito
    res.status(200).json({ msg: "Evento eliminado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al eliminar el evento" });
  }
};

module.exports = deleteEvent
