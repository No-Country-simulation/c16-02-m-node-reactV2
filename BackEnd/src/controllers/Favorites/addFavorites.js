const { User } = require("../../db");


const addFavorite = async (req, res) => {
    const userId = req.params.id;
    const  eventId  = req.body.eventId;

    try {
        // Buscar el usuario por su ID en la base de datos
        let user = await User.findByPk(userId);

        // Verificar si el usuario fue encontrado
        if (!user) {
            return res.status(404).json({ msg: "Usuario no encontrado" });
        }

        // Inicializar favoritos como un array vacío si es null
        user.favoritos = user.favoritos || [];

        // Verificar si el evento ya está en la lista de favoritos del usuario
        if (user.favoritos.includes(eventId)) {
            return res.status(400).json({ msg: "El evento ya está en la lista de favoritos del usuario" });
        }

        // Agregar el ID del evento a la lista de favoritos del usuario
        user.favoritos.push(eventId);

        // Guardar los cambios en la base de datos
        await user.save();

        // Responder con el usuario actualizado
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error al agregar favorito al usuario" });
    }
};

module.exports = addFavorite;