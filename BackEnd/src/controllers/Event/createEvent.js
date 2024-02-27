// controllers/eventController.js
const { Event } = require("../../db");

const createEventController = async (data) => {
  try {
    // Verificar si la fecha de creación está presente, de lo contrario, establecerla en la fecha actual
    data.fecha_creacion = data.fecha_creacion || new Date();

    // Convertir la fecha al formato adecuado
    let fecha = data.fecha;
    if (typeof fecha === 'string') {
      // Si la fecha es una cadena, intenta analizarla en un objeto de fecha
      let parsedDate = Date.parse(fecha);
      if (!isNaN(parsedDate)) {
        // Si se puede analizar, conviértela al formato 'YYYY-MM-DD'
        fecha = new Date(parsedDate).toISOString().split('T')[0];
      } else {
        // Si no se puede analizar, asume que ya está en el formato correcto
        fecha = new Date(fecha).toISOString().split('T')[0];
      }
    }

    // Agregar la fecha al objeto de datos
    data.fecha = fecha;

    // Crear el evento en la base de datos
    const event = await Event.create(data);

    return event;
  } catch (error) {
    throw new Error(error.message);
  }
};

const createEvent = async (req, res) => {
  const { nombre, fecha, descripcion, imagen, historia, redes } = req.body;

  // Verificar si los campos obligatorios están presentes
  if (!nombre || !fecha || !descripcion) {
    return res.status(400).send("Faltan datos obligatorios");
  }

  try {
    // Llamar al controlador para crear el evento
    const createdEvent = await createEventController({
      nombre,
      fecha,
      descripcion,
      imagen,
      historia,
      redes,
    });

    res.status(200).json(createdEvent);
    console.log("Evento creado:", createdEvent);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Error al crear el evento" });
  }
};

module.exports = createEvent;
