const updateEvent = async (req, res) => {
    const eventId = req.params.id;
    const eventData = req.body;

    try {
        let event = await Event.findByPk(eventId);

        if (!event) {
            return res.status(404).json({ msg: "Evento no encontrado" });
        }

        // Convertir la fecha al formato adecuado
        let fecha = eventData.fecha;
        if (typeof fecha === 'string') {
            // Si la fecha es una cadena, intenta analizarla en un objeto de fecha
            let parsedDate = Date.parse(fecha);
            if (!isNaN(parsedDate)) {
                fecha = new Date(parsedDate).toISOString().split('T')[0];
            } else {
                // Si no se puede analizar, asume que ya está en el formato correcto
                fecha = new Date(fecha).toISOString().split('T')[0];
            }
        }

        // Actualizar los campos del evento con los nuevos datos
        event.nombre = eventData.nombre || event.nombre;
        event.fecha = fecha || event.fecha;
        event.descripcion = eventData.descripcion || event.descripcion;
        event.imagen = eventData.imagen || event.imagen;
        event.historia = eventData.historia || event.historia;
        event.redes = eventData.redes || event.redes;
        event.integrantes = eventData.integrantes || event.integrantes;

        await event.save();

        res.status(200).json(event);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al actualizar el evento" });
    }
};

module.exports = updateEvent;
